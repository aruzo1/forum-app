import { UserInputError } from "apollo-server-core";
import {
  Arg,
  FieldResolver,
  Int,
  Query,
  Resolver,
  Root,
  Mutation,
  Authorized,
  Ctx,
} from "type-graphql";
import entityValidator from "../../validators/entityValidator";
import { IContext } from "../../types";
import { User, Thread, SubCategory } from "../../entities";
import { ThreadInput } from "./inputs";

@Resolver(() => Thread)
export default class ThreadResolver {
  @Query(() => [Thread])
  threads(@Arg("limit", () => Int, { nullable: true }) limit?: number) {
    return Thread.find({ order: { createdAt: "DESC" }, take: limit });
  }

  @Query(() => Thread)
  thread(@Arg("id") id: string) {
    return Thread.findOneBy({ id });
  }

  @FieldResolver(() => User)
  user(@Root() { userId }: Thread) {
    return User.findOneBy({ id: userId });
  }

  @Mutation(() => Thread)
  @Authorized()
  async createThread(
    @Ctx() { user }: IContext,
    @Arg("data") data: ThreadInput
  ) {
    const subCategory = await SubCategory.findOneBy({
      id: data.subCategoryId,
    }).catch(() => null);
    if (!subCategory) {
      throw new UserInputError("SUBCATEGORY NOT EXISTS", {
        errors: { other: "SubCategory Not Exists" },
      });
    }

    const thread = Thread.create({ ...data, userId: user!.id });
    const errors = await entityValidator(thread);
    if (errors) throw new UserInputError("INPUT ERROR", { errors });

    return thread.save();
  }
}
