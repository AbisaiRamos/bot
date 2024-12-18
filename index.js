const token = '8084551867:AAFqbDWG1pDBBHFha0gZSey84TszV19Sr70';
const apiURL = `https://api.telegram.org/bot${token}`;
import http from 'http';
import https from 'https';
import { Buffer } from 'buffer';


const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const message = JSON.parse(body).message;
            const chatId = message.chat.id;
            const text = '¡Hola! Soy tu bot de Telegram sin librerías.';

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

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('OK');
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
