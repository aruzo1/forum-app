import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import SubCategory from "./SubCategory";
import User from "./User";

@ObjectType()
@Entity()
export default class Thread extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  subCategoryId: string;

  @Column("uuid")
  userId: string;

  @Field()
  @Column()
  @Length(10, 255)
  title: string;

  @Field()
  @Column()
  @Length(30, 255)
  body: string;

  @Field()
  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.threads, {
    cascade: true,
  })
  @JoinColumn()
  subCategory: SubCategory;

  @ManyToOne(() => User, (user) => user.threads, { cascade: true })
  @JoinColumn()
  user: User;
}
