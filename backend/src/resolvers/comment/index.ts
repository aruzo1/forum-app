import { FieldResolver, Resolver, Root } from "type-graphql";
import { User, Comment } from "../../entities";

@Resolver(() => Comment)
export default class CommentResolver {
  @FieldResolver(() => User)
  user(@Root() { userId }: Comment) {
    return User.findOneBy({ id: userId });
  }
}
