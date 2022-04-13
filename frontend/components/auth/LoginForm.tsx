import { FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import { loginSchema } from "../../lib/schemas";
import { ILoginValues } from "../../lib/types";
import AuthForm from "./AuthForm";
import { useModals } from "../../contexts/ModalsContext";

const LoginForm = () => {
  const { login } = useAuth();
  const { closeModal } = useModals();

  const submitHandler = async (
    data: ILoginValues,
    { setErrors }: FormikHelpers<ILoginValues>
  ) => {
    login!(data)
      .then(() => closeModal!("login"))
      .catch((err) => {
        const errMsg = err.response.errors[0].message;
        setErrors({ email: errMsg, password: errMsg });
      });
  };

  return (
    <AuthForm
      name="Sign in"
      validationSchema={loginSchema}
      initialValues={{ email: "", password: "" }}
      inputs={[
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

export default LoginForm;
