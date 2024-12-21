import { Router } from "express";
import { login } from "../controller/login.controller.js";
import { sendMessage } from "../controller/sendMessage.controller.js";
import { vehicles } from "../controller/vehicles.controller.js";
import { token } from "../controller/toke.controller.js";
import { option } from "../controller/option.controller.js";

const expressRouter = Router();
expressRouter.get("/", vehicles);
expressRouter.get("/login", login);
expressRouter.get("/token", token);
expressRouter.get("/option", option);
expressRouter.post("/send-message", sendMessage);
export default expressRouter;