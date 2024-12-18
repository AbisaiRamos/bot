export default function sendMessageToChat(chatId, text) {
const token = '8084551867:AAFqbDWG1pDBBHFha0gZSey84TszV19Sr70'
    const message = JSON.stringify({
        chat_id: chatId,
        text: text
    });

    const options = {
        hostname: 'api.telegram.org',
        path: `/bot${token}/sendMessage`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(message)
        }
    };
    console.log(text)

}
