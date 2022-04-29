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
import { Thread, User } from "./index";

@ObjectType()
@Entity()
export default class Comment extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  threadId: string;

  @Column("uuid")
  userId: string;

  @Field()
  @Column()
  @Length(1, 255)
  body: string;

  @Field()
  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @ManyToOne(() => Thread, (thread) => thread.comments, {
    cascade: true,
  })
  @JoinColumn()
  thread: Thread;

  @ManyToOne(() => User, (user) => user.comments, { cascade: true })
  @JoinColumn()
  user: User;
}
