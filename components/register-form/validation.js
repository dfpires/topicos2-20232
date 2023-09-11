import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required"),
    email: Yup.string()
              .email("Enter a valid email")
              .required("Enter a registred email"),
    password: Yup.string()
              .required()
              .min(6, "Password must have a least 6 characters"),
    confirmPassword: Yup.string()
      .required()
      .oneOf(
      [Yup.ref("password"), null],
      "Password & Confirm Password does not match"
    )
})