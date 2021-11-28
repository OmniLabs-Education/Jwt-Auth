import {Router} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { SessionController } from './controllers/SessionController';
import { ShowUserController } from './controllers/ShowUserController';
import { ensuredAuthenticated } from './middlewares/ensureAuthenticated';

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);
routes.get("/me", ensuredAuthenticated(), new ShowUserController().handle);

export { routes }