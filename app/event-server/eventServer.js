import http from 'http';
import url from 'url';
import { EventEmitter } from 'events';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const PORT = 4000;

myEmitter.once('oneTimeEvent', () => {
    console.log('This will run only once!');
});

function regularListener() {
    console.log('Regular listener executed');
}

myEmitter.on('regularEvent', regularListener);

console.log("Listeners for 'regularEvent':");
console.log(myEmitter.listeners('regularEvent'));

myEmitter.on('newListener', (event) => {
    console.log(`New listener added for event: ${event}`);
});

myEmitter.on('customEvent', (msg) => {
    console.log(`Custom Event Triggered with message: ${msg}`);
});

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const routePath = parsedUrl.pathname;

    if (routePath === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Node.js EventEmitter Server Running...");
    }

    else if (routePath === "/trigger") {

        myEmitter.emit('oneTimeEvent');
        myEmitter.emit('oneTimeEvent');
        myEmitter.emit('regularEvent');
        myEmitter.emit('customEvent', 'Hello from Server!');

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Events Triggered! Check Console.");
    }

    else if (routePath === "/inspect") {

        const count = myEmitter.listenerCount('regularEvent');

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            regularEventListeners: count
        }));
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Event Server running at http://localhost:${PORT}`);
});
