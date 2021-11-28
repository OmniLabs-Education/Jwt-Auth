import { User } from "../entities/User";
import { getRepository } from "typeorm";

export const UserRepository = () => {
  return getRepository(User);
};

