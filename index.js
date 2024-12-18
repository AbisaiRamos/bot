import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';

const token = '8084551867:AAFqbDWG1pDBBHFha0gZSey84TszV19Sr70';
const apiURL = `https://api.telegram.org/bot${token}`;

const app = express();
app.use(bodyParser.json());

app.get('/webhook', (req, res) => {
    const message = "Hola, conexion desde el servidor de prueba";
    const chatId = message.chat.id;


    const reply = {
        chat_id: chatId,
        text: '¡Hola! Soy tu bot de Telegram.'
    };

    fetch(`${apiURL}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reply)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    res.send('OK');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
