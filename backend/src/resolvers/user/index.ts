import { UserInputError } from "apollo-server-core";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcrypt";
import generateToken from "../../helpers/generateToken";
import { User } from "../../entities";
import { AuthOutput, LoginInput, RegisterInput } from "./inputs";

@Resolver()
export default class UserResolver {
  @Mutation(() => AuthOutput)
  async login(@Arg("loginInput") input: LoginInput) {
    const user = await User.findOneBy({ email: input.email });

    if (
      !user?.password ||
      !input.password ||
      !(await bcrypt.compare(input.password, user.password))
    ) {
      throw new UserInputError("Invalid Credentials");
    }

    return { token: generateToken(user.id), user };
  }

  @Mutation(() => AuthOutput)
  async register(@Arg("registerInput") input: RegisterInput) {
    const oldUser = await User.findOneBy({ email: input.email });
    if (oldUser) throw new UserInputError("User Exists");

    const encryptedPassword = await bcrypt.hash(input.password, 10);
    const user = await User.create({
      ...input,
      password: encryptedPassword,
    }).save();

    return { token: generateToken(user.id), user };
  }

  @Query(() => User)
  user(@Arg("userId") id: string) {
    return User.findOneBy({ id });
  }

  @Query(() => User)
  @Authorized()
  account(@Ctx() ctx: Context) {
    return User.findOneBy({ id: ctx.user!.id });
  }
}
