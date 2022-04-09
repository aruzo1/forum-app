import * as yup from "yup";

export const registerSchema = yup.object().shape({
  login: yup.string().min(3).max(16).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

export const registerInitalValues = {
  login: "",
  email: "",
  password: "",
};

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const loginInitalValues = {
  email: "",
  password: "",
};
