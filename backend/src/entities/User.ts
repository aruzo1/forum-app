import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Thread from "./Thread";

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  login: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Field()
  @CreateDateColumn({ default: "NOW()" })
  createdAt: Date;

  @OneToMany(() => Thread, (thread) => thread.user)
  threads: Thread[];
}
