import "dotenv/config";
import express from "express"
import bodyParser from "body-parser";
import expressRouter from "./routes/router.js";
import path from "path";
import { fileURLToPath } from 'url';
import { bot } from "./bot.js";
const token = process.env.TOKEN || '7607469719:AAEKWwwJb1lkVfz5rIhqZQ7VR4yJjAm4jt8';

const app = express();

const webhookURL = `${process.env.BOT_URL}/bot${token}`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

bot.setWebHook(webhookURL);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', expressRouter)


app.post(`/send-message/bot${token}`, (req, res) => { 
     //bot.processUpdate(req.body);
    // console.log(req.body)
    
     bot.sendMessage(7087786159,JSON.stringify(req.body.message.chat))
         .then(r => {console.log(r)})
         .catch(err => {console.log(err)}) 

     res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Servidor runnig at http://localhost:3000');
});