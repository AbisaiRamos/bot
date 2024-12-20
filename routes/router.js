import { Router } from "express";
import { login } from "../controller/login.controller.js";
import { sendMessage } from "../controller/sendMessage.controller.js";
import { vehicles } from "../controller/vehicles.controller.js";

const expressRouter = Router();
expressRouter.get("/", login);
expressRouter.get("/vehicles", vehicles);
expressRouter.post("/send-message", sendMessage);
export default expressRouter;