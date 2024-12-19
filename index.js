import "dotenv/config";
import express from "express"
import bodyParser from "body-parser";
import expressRouter from "./routes/router.js";
import { bot } from "./bot.js";
const token = process.env.TOKEN || '7607469719:AAEKWwwJb1lkVfz5rIhqZQ7VR4yJjAm4jt8';

const app = express();

const webhookURL = `${process.env.BOT_URL}/bot${token}`;
bot.setWebHook(webhookURL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', expressRouter)


// app.post(`/bot${token}`, (req, res) => { 
//     bot.processUpdate(req.body);
//     res.sendStatus(200); 
// });

app.listen(3000, () => {
    console.log('Servidor runnig at http://localhost:3000');
});