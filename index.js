const toke2 = '8084551867:AAFqbDWG1pDBBHFha0gZSey84TszV19Sr70'; //abisai
const token = '7607469719:AAEKWwwJb1lkVfz5rIhqZQ7VR4yJjAm4jt8'
const apiURL = `https://api.telegram.org/bot${token}`;
import http from 'http';
import https from 'https';
import { Buffer } from 'buffer';


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if(req.method ==='GET' && req.url === '/webhook') {
        request.write('Hola')
    }

    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(JSON.parse(body))
            const message = JSON.parse(body).message;
            const chatId = message.chat.id;
            const text = 'Hola desde el servidor';

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
            console.log(`Mensaje recibido de ${chatId}: ${text}`);

            request.end();

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(reply);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
