import * as yup from "yup";

export const registerSchema = yup.object().shape({
  login: yup.string().required().min(2).max(39),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(255),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const threadSchema = yup.object().shape({
  title: yup.string().required().min(10).max(255),
  body: yup.string().required().min(30).max(255),
});
