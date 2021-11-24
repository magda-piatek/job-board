import { model, Schema, models } from "mongoose";
import { TUser } from "../../types/user";

const UserSchema = new Schema({
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  // avatar: {
  //   type: Object,
  // },
});

export default models.User || model<TUser>("User", UserSchema);
