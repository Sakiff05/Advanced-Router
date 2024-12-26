import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(20, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .positive("Price must be positive")
    .integer("Price must be integer")
    .min(3, "Price must be 3 dollars or more")
    .max(100, "Price must be 100 dollars or less")
    .required("Required"),
  author: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  publishedYear: Yup.string().required("Required"),
  genre: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  language: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  image: Yup.string().required("Required").url("Book image should be url"),
});

function AddForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        image: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center gap-3">
          <Field
            name="title"
            className="border rounded w-96 px-2 py-3"
            placeholder="Title..."
          />
          {errors.title && touched.title ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.title}
            </Alert>
          ) : null}
          <Field
            name="description"
            className="border rounded w-96 px-2 py-3"
            placeholder="Description..."
          />
          {errors.description && touched.description ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.description}
            </Alert>
          ) : null}
          <Field
            name="price"
            className="border rounded w-96 px-2 py-3"
            placeholder="Price..."
          />
          {errors.price && touched.price ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.price}
            </Alert>
          ) : null}
          <Field
            name="author"
            className="border rounded w-96 px-2 py-3"
            placeholder="Author..."
          />
          {errors.author && touched.author ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.author}
            </Alert>
          ) : null}
          <Field
            name="publishedYear"
            className="border rounded w-96 px-2 py-3"
            placeholder="Published year..."
          />
          {errors.publishedYear && touched.publishedYear ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.publishedYear}
            </Alert>
          ) : null}
          <Field
            name="genre"
            className="border rounded w-96 px-2 py-3"
            placeholder="Genre..."
          />
          {errors.genre && touched.genre ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.genre}
            </Alert>
          ) : null}
          <Field
            name="language"
            className="border rounded w-96 px-2 py-3"
            placeholder="Language..."
          />
          {errors.language && touched.language ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.language}
            </Alert>
          ) : null}
          <Field
            name="image"
            className="border rounded w-96 px-2 py-3"
            placeholder="Image..."
          />
          {errors.image && touched.image ? (
            <Alert
              severity="error"
              className="w-96 flex justify-center items-center"
            >
              {errors.image}
            </Alert>
          ) : null}

          <Button type="submit" variant="outlined" color="primary" size="large">
            Add Book
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddForm;
