import React, { useContext } from 'react'
import Navbar from './navbar'
import AlbumItem from './albumItem'
import SongItem from './songItem'
import { PlayerContext } from '../context/playerContext'

const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);

  return (
    <>
    <Navbar/>

    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl' >Featuted Charts</h1>
        <div className='flex overflow-auto '>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}

        </div>

    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl' >Today's biggest hits</h1>
        <div className='flex overflow-auto '>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}

        </div>

    </div>

    </>
  )
}

export default DisplayHome