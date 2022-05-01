import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import { User, SubCategory, Comment } from "./index";

@ObjectType()
@Entity("thread", { orderBy: { createdAt: "DESC" } })
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

  @OneToMany(() => Comment, (comment) => comment.thread)
  comments: Comment[];
}
