import connectToDatabase from "../../../utils/dbConnect";

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    res.send("connect mongoDB");
  } catch (error) {
    console.log(error);
  }
}
