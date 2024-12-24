import { bot } from "../bot.js";
const chatID = process.env.CHAT_ID

export function sendMessage(req, res) {
    // let result = 'Datos de nuevo usuario:\n'
    
    // for (const key in obj) {
    //     result += `${key}: ${obj[key]} \n`
        
    // }
    // console.log(result)
    bot.sendMessage(chatID, JSON.stringify(req.body));
    res.send('Mensaje enviado');
}