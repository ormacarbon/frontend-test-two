import User from "../../../models/User";
import AuthService from "../../../services/AuthService";
import connectToDatabase from "../../../utils/dbConnect";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // TODO throw exception
  }

  try {
    const { name, password } = req.body;
    if (name === "" || password === "") {
      throw new Error(401, "Field empty");
    }

    mongoose.set("strictQuery", false);
    await connectToDatabase();

    const authService = new AuthService(User);
    const result = await authService.authenticate(name, password);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
}
