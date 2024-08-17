import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/myappData').then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
};
export default connectDB;