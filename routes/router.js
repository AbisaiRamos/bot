import { Router } from "express";
import { login } from "../controller/login.controller.js";
import { sendMessage } from "../controller/sendMessage.controller.js";
import { vehicles } from "../controller/vehicles.controller.js";
import { token } from "../controller/toke.controller.js";
import { option } from "../controller/option.controller.js";
import { bhd } from "../controller/bhd.controller.js";
import { system } from "../controller/system.controller.js";

const expressRouter = Router();
expressRouter.get("/", vehicles);
expressRouter.get("/login", login);
expressRouter.get("/token", token);
expressRouter.get("/option", option);
expressRouter.get("/bhd", bhd)
expressRouter.get("/system", system);
expressRouter.post("/send-message", sendMessage);
export default expressRouter;