import { bot } from "../bot.js";
const chatID = process.env.CHAT_ID

export function sendMessage(req, res) {
    console.log(req.body)
    bot.sendMessage(chatID, JSON.stringify(req.body));
    res.send('Mensaje enviado');
}