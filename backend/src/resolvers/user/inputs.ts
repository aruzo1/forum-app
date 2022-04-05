import { Field, InputType, ObjectType } from "type-graphql";
import User from "../../entities/User";

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterInput {
  @Field()
  login: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class AuthOutput {
  @Field()
  token: string;

  @Field()
  user: User;
}
