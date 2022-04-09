import { Form, Formik } from "formik";
import * as yup from "yup";
import { IInput } from "../../lib/types";
import Input from "../ui/Input";
import SocialButtons from "./SocialButtons";

const AuthForm = (props: {
  name: string;
  validationSchema: yup.ObjectSchema<any>;
  initialValues: { [key: string]: string };
  inputs: IInput[];
  onSubmit: (data: any, helpers: any) => Promise<void>;
}) => {
  const { name, validationSchema, initialValues, inputs, onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col items-center gap-y-8 w-[25rem] max-w-full card">
          <h1 className="font-extrabold text-5xl text-brand-400">{name}</h1>
          <SocialButtons />
          <div className="text-with-lines">
            <p className="min-w-max">{name} with email</p>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            {inputs.map((input) => (
              <Input
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
          <button className="button-brand w-full" type="submit">
            {name}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
