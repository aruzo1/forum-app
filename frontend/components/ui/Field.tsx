import { ErrorMessage, Field as FormikField } from "formik";
import { IField } from "lib/types";

const Field = (props: IField) => (
  <div className={"flex flex-col gap-y-2 " + props.className}>
    <label
      htmlFor={props.name}
      className={`w-fit text-brand-400 transition-colors ${
        props.error && props.touched && "text-error"
      }`}
    >
      {props.label}
    </label>
    <FormikField
      className={`field ${props.error && props.touched && "!border-error"}`}
      placeholder={props.placeholder}
      name={props.name}
      id={props.name}
      type={props.type}
      autoComplete={props.autoComplete}
      as={props.as}
    />
    <ErrorMessage name={props.name}>
      {(msg) => <p className="text-error text-sm">{msg}</p>}
    </ErrorMessage>
  </div>
);

export default Field;
