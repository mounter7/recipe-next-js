import mongoose from "mongoose";

const connectMongoDB = async () => {
mongoose.connect(process.env.MONGODB_URI).then(console.log('connected.')).catch(error => console.log(error))
}

export default connectMongoDB