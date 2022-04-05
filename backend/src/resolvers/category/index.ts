import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Category, SubCategory } from "../../entities";

@Resolver(() => Category)
export default class CategoryResolver {
  @Query(() => [Category])
  categories() {
    return Category.find();
  }

  @FieldResolver(() => [SubCategory])
  subCategories(@Root() { id }: Category) {
    return SubCategory.findBy({ categoryId: id });
  }
}
