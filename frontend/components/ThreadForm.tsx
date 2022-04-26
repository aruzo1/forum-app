import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Formik } from "formik";
import client from "lib/graphql/client";
import { ISubCategory } from "lib/types";
import AuthRequired from "components/auth/AuthRequired";
import Field from "components/ui/Field";
import Spinner from "components/ui/Spinner";
import { CREATE_THREAD } from "lib/graphql/mutations";
import { threadSchema } from "lib/schemas";

const ThreadForm = ({ subCategory }: { subCategory: ISubCategory }) => {
  const router = useRouter();

  return (
    <AuthRequired>
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={threadSchema}
        onSubmit={async (values, { setErrors }) => {
          await client
            .mutate({
              mutation: CREATE_THREAD,
              variables: { data: { ...values, ...router.query } },
            })
            .then(({ data }) => router.push("/thread/" + data?.createThread.id))
            .catch((err) => setErrors(err.graphQLErrors[0].extensions.errors));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="col-span-full flex flex-col gap-y-4 card">
            <div className="flex flex-wrap items-center gap-x-2">
              <h1 className="text-3xl font-semibold">Create Thread</h1>
              <p className="text-neutral-200">
                In{" "}
                <Link href={`/sub-category/${subCategory.id}`}>
                  <a className="link">{subCategory.name}</a>
                </Link>
              </p>
            </div>
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
            <button className="btn-brand w-56 max-w-full" type="submit">
              {isSubmitting && (
                <Spinner size={24} className="!border-t-neutral-900 mx-auto" />
              )}
              {!isSubmitting && "Start New Thread"}
            </button>
          </Form>
        )}
      </Formik>
    </AuthRequired>
  );
};

export default ThreadForm;
