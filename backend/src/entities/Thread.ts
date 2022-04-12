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
  title: string;

  @Field()
  @Column()
  body: string;

  @Field()
  @CreateDateColumn({ default: "NOW()" })
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
