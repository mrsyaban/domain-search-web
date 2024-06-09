import express, { Express } from "express";
import cors from "cors";
import { LoginRouter } from "./routers/login.router";
export class App {
  private _port: number = 3000;
  server: Express;

  constructor() {
    this.server = express();

    const dummyRouter = new LoginRouter();

    this.server.use(
      cors(),
      express.json(),
      express.urlencoded(),
      express.static("src/storage"),
      dummyRouter.getRoute(),
    );
  }

  run() {
    this.server.listen(this._port, () =>
      console.log(`listening on port ${this._port}`)
    );
  }
}
