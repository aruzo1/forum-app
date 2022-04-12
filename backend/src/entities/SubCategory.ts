import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Category from "./Category";
import Thread from "./Thread";

@ObjectType()
@Entity()
export default class SubCategory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  categoryId: string;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.subCategories, {
    cascade: true,
  })
  @JoinColumn()
  category: Category;

  @OneToMany(() => Thread, (thread) => thread.subCategory)
  threads: Thread[];
}
