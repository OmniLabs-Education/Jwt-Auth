import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";

type UserRequest = {
  user_id: string;
};

export class ShowUserService {
  async execute({ user_id }: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOne({ id: user_id });

    if (!existUser) {
      return new Error("User Non Exist");
    }

    delete existUser.password

    return existUser;
  }
}
