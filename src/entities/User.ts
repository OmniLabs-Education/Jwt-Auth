import {
  Column,
  Entity,
} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  password: string;
}
