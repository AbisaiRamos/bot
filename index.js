import express from 'express';
import https from 'https';
import { Buffer } from 'buffer';

const app = express();
// const token = '7607469719:AAEKWwwJb1lkVfz5rIhqZQ7VR4yJjAm4jt8';
const token = '8084551867:AAFqbDWG1pDBBHFha0gZSey84TszV19Sr70'
const port = process.env.PORT || 3000;

app.use(express.json());  // Middleware para parsear JSON

app.get('/webhook', (req, res) => {
    res.send('Hola');
});

app.post('/webhook', (req, res) => {
    const message = req.body.message;
    if (message) {
        const chatId = message.chat.id;
        const text = 'Hola, este es un mensaje de prueba desde el servidor, mandame un mensaje';

        const reply = JSON.stringify({
            chat_id: chatId,
            text: text
        });

        const options = {
            hostname: 'api.telegram.org',
            path: `/bot${token}/sendMessage`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(reply)
            }
        };

        const request = https.request(options, response => {
            response.on('data', d => {
                process.stdout.write(d);
            });
        });

        request.on('error', e => {
            console.error(e);
        });

        request.write(reply);
        request.end();

        console.log(`Mensaje recibido de ${chatId}: ${text}`);
        res.send('Mensaje enviado');
    } else {
        res.status(400).send('Bad Request');
    }
});

app.use((req, res) => {
    res.status(404).send('Home, wolcome here');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
