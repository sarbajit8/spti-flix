import {v2 as cloudinary} from 'cloudinary'
import songModel from '../models/songModel.js';

//insert all data

const addSong = async (req, res) => {

 try {

    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];
    const audioUpload = await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"});
    const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
    const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
    // console.log(name,desc,album,audioUpload,imageUpload);
        
     const songData = {
        name,
        desc,
        album,
        image:imageUpload.secure_url,
        file:audioUpload.secure_url, 
        duration 

     }
     const song = songModel(songData);
     await song.save();

     res.status(201).json({success:true,message:"song Added"});

 } catch (error) {
    console.error("Error from song controller", error);
    res.status(500).json({ message: 'Internal server error', error });
       
 }


}

//get all song data

const listSong = async (req, res) => {
    try {
      
     const allSongs = await songModel.find({});

     res.status(201).json({success:true,songs: allSongs})


    } catch (error) {

      res.json({success:false});
      
    }

}


//delete song by id

const removeSong = async(req, res) => {
   try {
     await songModel.findByIdAndDelete(req.body.id);
     res.json({success:true,message:"song removed"})

      
   } catch (error) {
      res.json({success:false});

      
   }
}




export {addSong, listSong, removeSong};