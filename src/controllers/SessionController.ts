import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

export class SessionController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const sessionService = new SessionService();
    const result = await sessionService.execute({ name, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
