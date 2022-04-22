import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { useModals } from "../../contexts/ModalsContext";
import client from "../../lib/graphql/client";
import { LOGIN, REGISTER } from "../../lib/graphql/mutations";
import { IField } from "../../lib/types";
import Field from "../ui/Field";
import Spinner from "../ui/Spinner";
import SocialButtons from "./SocialButtons";

const AuthForm = (props: {
  name: string;
  validationSchema: yup.ObjectSchema<any>;
  initialValues: { [key: string]: string };
  inputs: IField[];
  login?: boolean;
}) => {
  const { name, validationSchema, initialValues, inputs, login } = props;
  const { setUser } = useAuth()!;
  const { closeModal } = useModals()!;

  const submitHandler = async (
    data: any,
    { setErrors }: FormikHelpers<any>
  ) => {
    await client
      .mutate({ mutation: login ? LOGIN : REGISTER, variables: { data } })
      .then(({ data }) => {
        const actionName = login ? "login" : "register";
        localStorage.setItem("token", data[actionName].token);
        setUser(data[actionName].user);
        closeModal(actionName);
      })
      .catch((err) => {
        setErrors(err.graphQLErrors[0].extensions.errors);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col items-center gap-y-8 w-[25rem] max-w-full card">
          <h2 className="font-semibold text-5xl text-brand-400">{name}</h2>
          <SocialButtons />
          <div className="text-with-lines text-neutral-200">
            <p className="min-w-max">{name} with email</p>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {inputs.map((input) => (
              <Field
                key={input.name}
                label={input.label}
                placeholder={input.placeholder}
                name={input.name}
                error={errors[input.name]}
                touched={touched[input.name]}
                type={input.type}
                autoComplete={input.autoComplete}
              />
            ))}
          </div>
          <button
            className="btn-brand w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Spinner size={24} className="!border-t-neutral-900 mx-auto" />
            )}
            {!isSubmitting && name}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
