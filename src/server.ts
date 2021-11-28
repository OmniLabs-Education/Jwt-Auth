import 'dotenv/config'
import express from 'express'
import { routes } from "./routes";

import "./database";

const app = express()
app.use(express.json());
app.use(routes);

app.listen(process.env.API_PORT, () => console.log(`Server started on port ${process.env.API_PORT}`))