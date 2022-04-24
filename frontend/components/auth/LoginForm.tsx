import { loginSchema } from "lib/schemas";
import AuthForm from "components/auth/AuthForm";

const LoginForm = () => (
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
    login
  />
);

export default LoginForm;
