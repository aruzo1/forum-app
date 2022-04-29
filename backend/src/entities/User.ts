import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length, IsEmail, IsUrl, IsOptional } from "class-validator";
import { Thread, Comment } from "./index";

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ default: "unnamed" })
  @Length(2, 39)
  login: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @IsOptional()
  @Length(8, 255)
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  @IsOptional()
  @IsUrl()
  avatarUrl: string;

  @Field()
  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @OneToMany(() => Thread, (thread) => thread.user)
  threads: Thread[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
