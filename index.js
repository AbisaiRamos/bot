import { config } from "dotenv";
import express from "express"
import bodyParser from "body-parser";
import TelegramBot from "node-telegram-bot-api";
import { fileURLToPath } from 'url';
import path from 'path'
config()
const token = process.env.TOKEN || '7607469719:AAEKWwwJb1lkVfz5rIhqZQ7VR4yJjAm4jt8';
const port = process.env.PORT || 3000;
const chatID = process.env.CHAT_ID || '7087786159';
const bot = new TelegramBot(token, { polling: true });


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.post('/send-message', async (req, res) => {
    bot.on('message', (msg) => {
        const chatId = chatID || msg.chat.id;
        const reponse = `Hola ${msg.from.first_name}, recibi tu mensaje`;
        bot.sendMessage(chatId, reponse);
    })
    res.send('Mensaje enviado');
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(3000, () => {
    console.log('Servidor runnig at http://localhost:3000');
});