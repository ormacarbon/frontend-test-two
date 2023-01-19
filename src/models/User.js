import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true, // TODO check it
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.models?.User || mongoose.model("User", UserSchema);
