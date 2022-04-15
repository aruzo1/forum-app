import * as yup from "yup";

export const registerSchema = yup.object().shape({
  login: yup.string().required().min(3).max(16),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(64),
});

export const registerInitalValues = {
  login: "",
  email: "",
  password: "",
};

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const loginInitalValues = {
  email: "",
  password: "",
};

export const threadSchema = yup.object().shape({
  title: yup.string().required().min(10),
  body: yup.string().required().min(30),
});

export const threadInitalValues = {
  title: "",
  body: "",
};
