import * as yup from "yup";

const userSchema = yup.object().shape({
  avatar: yup.string(),
});

export default userSchema;
