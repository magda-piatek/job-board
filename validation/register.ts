import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is a required"),
  password: yup.string().required("Password is a required"),
  confirm_password: yup
    .string()
    .required("Confirm password is a required")
    .when("password", {
      is: (val: string) => (val || []).length > 0,
      then: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
    }),
});

export default registerSchema;
