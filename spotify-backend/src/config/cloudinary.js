import {v2 as cloudinary} from 'cloudinary'


const connectCloudinary = async () => {
    await cloudinary.config({
        // cloud_name: process.env.CLOUDINARY_NAME,
        // api_key: process.env.CLOUDINARY_API_KEY,
        // api_secret: process.env.CLOUDINARY_SECRET_KEY,

        cloud_name: "duhee8hy1",
        api_key: "643829253419487",
        api_secret: "fsvbK-ouuWst3wo0x_53HqX766w",
         
         

    })
}

export default connectCloudinary;