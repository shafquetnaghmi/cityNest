import mongoose from "mongoose"

const connectDb=async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("db connected")
    })
    await mongoose.connect (`${process.env.MONGODB_URL}/city-nest`)
}

export default connectDb