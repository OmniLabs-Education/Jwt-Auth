import {Router} from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const routes = Router();

routes.post("/users", new CreateUserController().handle);

export { routes }