import { Form, Formik } from "formik";
import { threadInitalValues, threadSchema } from "../lib/schemas";
import Field from "./ui/Field";

const ThreadForm = () => {
  return (
    <Formik
      initialValues={threadInitalValues}
      onSubmit={() => {}}
      validationSchema={threadSchema}
    >
      {({ errors, touched }) => (
        <Form className="col-span-full flex flex-col gap-y-4 card">
          <h2 className="text-3xl font-semibold">Create Thread</h2>
          <Field
            label="Title"
            placeholder="Your new thread title"
            name="title"
            error={errors.title}
            touched={touched.title}
          />
          <Field
            as="textarea"
            label="Body"
            placeholder="Your new thread message"
            name="body"
            error={errors.body}
            touched={touched.body}
          />
          <button className="btn-brand">Start new thread</button>
        </Form>
      )}
    </Formik>
  );
};

export default ThreadForm;