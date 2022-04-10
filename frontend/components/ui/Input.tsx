import { ErrorMessage, Field } from "formik";
import { IInput } from "../../lib/types";

const Input = (props: IInput) => {
  const { label, placeholder, name, error, touched, type, autoComplete } =
    props;

  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor={name}
        className={`w-fit text-brand-400 transition-colors ${
          error && touched && "text-error"
        }`}
      >
        {label}
      </label>
      <Field
        className={`input ${error && touched && "!border-error"}`}
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        autoComplete={autoComplete}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className="text-error text-sm">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
