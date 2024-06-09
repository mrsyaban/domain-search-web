import express, { Express } from "express";
import cors from "cors";
import { LoginRouter } from "./routers/login.router";
import dotenv from 'dotenv';
dotenv.config();
export class App {
  private _port: number = 3000;
  server: Express;

  constructor() {
    this.server = express();

    const loginRouter = new LoginRouter();

    this.server.use(
      cors(),
      express.json(),
      express.urlencoded(),
      loginRouter.getRoute(),
    );
  }

  run() {
    this.server.listen(this._port, () =>
      console.log(`listening on port ${this._port}`)
    );
  }
}
