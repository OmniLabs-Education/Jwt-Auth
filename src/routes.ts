import {Router} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { SessionController } from './controllers/SessionController';

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

export { routes }