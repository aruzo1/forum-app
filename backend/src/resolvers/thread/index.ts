import { Arg, FieldResolver, Int, Query, Resolver, Root } from "type-graphql";
import { User, Thread } from "../../entities";

@Resolver(() => Thread)
export default class ThreadResolver {
  @Query(() => [Thread])
  threads(@Arg("limit", () => Int, { nullable: true }) limit?: number) {
    return Thread.find({ order: { createdAt: "DESC" }, take: limit });
  }

  @FieldResolver(() => User)
  user(@Root() { userId }: Thread) {
    return User.findOneBy({ id: userId });
  }
}
