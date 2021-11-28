import { Request, Response } from "express";
import { ShowUserService } from "../services/ShowUserService";

export class ShowUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user.id;

    const showUserService = new ShowUserService();
    const result = await showUserService.execute({ user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
