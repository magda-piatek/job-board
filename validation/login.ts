import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is a required"),
  password: yup.string().required("Password is a required"),
});

export default loginSchema;
