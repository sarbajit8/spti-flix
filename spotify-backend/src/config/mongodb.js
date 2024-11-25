import mongoose from "mongoose";

const connectDB = async()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("connection established!!!!");
        

    });
    await mongoose.connect(`mongodb://localhost:27017/spotify`);


}

export default connectDB;