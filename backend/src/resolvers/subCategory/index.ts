import { FieldResolver, Int, Resolver, Root, Query, Arg } from "type-graphql";
import { SubCategory, Thread } from "../../entities";

@Resolver(() => SubCategory)
export default class SubCategoryResolver {
  @Query(() => [SubCategory])
  subCategories() {
    return SubCategory.find();
  }

  @Query(() => SubCategory)
  subCategory(@Arg("id") id: string) {
    return SubCategory.findOneBy({ id });
  }

  @FieldResolver(() => [Thread])
  threads(@Root() { id }: SubCategory) {
    return Thread.findBy({ subCategoryId: id });
  }

  @FieldResolver(() => Int)
  threadsCount(@Root() { id }: SubCategory) {
    return Thread.countBy({ subCategoryId: id });
  }
}
