import { model, Schema, models } from "mongoose";
import { TUser } from "../../types/user";

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  facebookId: {
    type: String,
  },
});

export default models.User || model<TUser>("User", UserSchema);
