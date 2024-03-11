import * as Yup from "yup";

export const signUpSchema = Yup.object({
    size: Yup.string().min(1).max(25).required("Please Enter the Size"),
    size_code: Yup.string().min(1).max(25).required("Please Enter the Size Code")
})