import moongose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    await moongose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect mongoDB 🚀");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
