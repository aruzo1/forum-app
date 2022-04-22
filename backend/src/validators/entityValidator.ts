import { BaseEntity } from "typeorm";
import { validate } from "class-validator";

export default async (entity: BaseEntity) => {
  const errors = await validate(entity);
  const convertedErrors: { [key: string]: string } = {};

  if (errors.length > 0) {
    errors.forEach((error) => {
      convertedErrors[error.property] = Object.values(error.constraints!)[0];
    });
    return convertedErrors;
  }

  return null;
};
