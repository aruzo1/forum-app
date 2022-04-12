import { FormikHelpers } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { registerSchema } from "../../lib/schemas";
import { IRegisterValues } from "../../lib/types";
import AuthForm from "./AuthForm";

const RegisterForm = () => {
  const { register } = useAuth();

  const submitHandler = async (
    data: IRegisterValues,
    { setErrors }: FormikHelpers<IRegisterValues>
  ) => {
    register!(data).catch((err) => {
      const errMsg = err.response.errors[0].message;
      setErrors({ email: errMsg });
    });
  };

  return (
    <AuthForm
      name="Sign up"
      validationSchema={registerSchema}
      initialValues={{ login: "", email: "", password: "" }}
      inputs={[
        { label: "Login", placeholder: "Login", name: "login" },
        {
          label: "Email Adress",
          placeholder: "Email",
          name: "email",
          type: "email",
        },
        {
          label: "Password",
          placeholder: "Password",
          name: "password",
          type: "password",
          autoComplete: "on",
        },
      ]}
      onSubmit={submitHandler}
    />
  );
};

export default RegisterForm;
