import { UserInputError } from "apollo-server-core";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcrypt";
import generateToken from "../../auth/generateToken";
import { IContext } from "../../types";
import { User } from "../../entities";
import { AuthOutput, LoginInput, RegisterInput } from "./inputs";
import entityValidator from "../../validators/entityValidator";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOneBy({ id });
  }

  @Query(() => User)
  @Authorized()
  account(@Ctx() ctx: IContext) {
    return User.findOneBy({ id: ctx.user!.id });
  }

  @Mutation(() => AuthOutput)
  async login(@Arg("data") data: LoginInput) {
    const user = await User.findOneBy({ email: data.email });

    if (
      !user?.password ||
      !data.password ||
      !(await bcrypt.compare(data.password, user.password))
    ) {
      throw new UserInputError("INVALID CREDENTIALS", {
        errors: {
          email: "Invalid credentials",
          password: "Invalid Credentials",
        },
      });
    }

    return { token: generateToken(user.id), user };
  }

  @Mutation(() => AuthOutput)
  async register(@Arg("data") data: RegisterInput) {
    await User.findOneBy({ email: data.email }).then((user) => {
      if (user) {
        throw new UserInputError("EMAIL EXISTS", {
          errors: { email: "User with this email exists" },
        });
      }
    });

    const encryptedPassword = await bcrypt.hash(data.password, 10);
    const user = User.create({ ...data, password: encryptedPassword });

    const errors = await entityValidator(user);
    if (errors) throw new UserInputError("INPUT ERROR", { errors });

    return { token: generateToken(user.id), user: user.save() };
  }
}
