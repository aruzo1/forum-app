import { registerSchema } from "lib/schemas";
import AuthForm from "components/auth/AuthForm";

const RegisterForm = () => (
  <AuthForm
    name="Sign up"
    validationSchema={registerSchema}
    initialValues={{ login: "", email: "", password: "" }}
    inputs={[
      {
        label: "Email Adress",
        placeholder: "Email",
        name: "email",
        type: "email",
      },
      { label: "Login", placeholder: "Login", name: "login" },
      {
        label: "Password",
        placeholder: "Password",
        name: "password",
        type: "password",
        autoComplete: "on",
      },
    ]}
  />
);

export default RegisterForm;
