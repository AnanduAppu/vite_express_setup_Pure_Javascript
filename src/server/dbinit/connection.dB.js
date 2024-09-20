import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connnectInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);

    console.log(`\n Mongodb connected !! DB HOST : ${connnectInstance.connection.host}`)


  } catch (error) {
    console.log(`mongodb connnection error:- ${error}`);
    process.exit(1);
  }
};


export default connectDB