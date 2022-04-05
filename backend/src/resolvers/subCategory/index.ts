import { FieldResolver, Int, Resolver, Root } from "type-graphql";
import { SubCategory, Thread } from "../../entities";

@Resolver(() => SubCategory)
export default class SubCategoryResolver {
  @FieldResolver(() => [Thread])
  threads(@Root() { id }: SubCategory) {
    return Thread.findBy({ subCategoryId: id });
  }

  @FieldResolver(() => Int)
  threadsCount(@Root() { id }: SubCategory) {
    return Thread.countBy({ subCategoryId: id });
  }
}
