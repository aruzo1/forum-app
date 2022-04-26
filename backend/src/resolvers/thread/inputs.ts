import { Field, InputType } from "type-graphql";

@InputType()
export class ThreadInput {
  @Field()
  subCategoryId: string;

  @Field()
  title: string;

  @Field()
  body: string;
}
