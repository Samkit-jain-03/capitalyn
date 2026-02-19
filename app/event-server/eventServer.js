import http from 'http';
import { EventEmitter } from 'events';

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

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const routePath = parsedUrl.pathname;

    if (routePath === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>CAPITALYN</title>
        <style>
        body {
            margin:0;
            font-family: 'Segoe UI', sans-serif;
            background:#f4efe6;
        }
        header {
            background:#0b2c4d;
            color:#f4efe6;
            text-align:center;
            padding:40px 0;
        }
        .logo {
            width:90px;
            height:90px;
            background:#f4efe6;
            margin:0 auto 15px auto;
            border-radius:14px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:32px;
            font-weight:bold;
            color:#0b2c4d;
        }
        .brand {
            font-size:30px;
            letter-spacing:6px;
        }
        .container {
            text-align:center;
            margin-top:80px;
        }
        button {
            padding:14px 30px;
            font-size:16px;
            background:#0b2c4d;
            color:#f4efe6;
            border:none;
            border-radius:6px;
            cursor:pointer;
            transition:0.3s;
        }
        button:hover {
            background:#154a7a;
        }
        .info {
            margin-top:20px;
            color:#333;
        }
        </style>
        </head>
        <body>

        <header>
            <div class="logo">C</div>
            <div class="brand">CAPITALYN</div>
        </header>

        <div class="container">
            <h2>EventEmitter Demonstration</h2>
            <button onclick="triggerEvents()">Trigger Domain Events</button>
            <div class="info">
                Check your terminal to view EventEmitter output.
            </div>
        </div>

        <script>
        function triggerEvents(){
            fetch('/trigger')
            .then(res => res.text())
            .then(data => alert(data));
        }
        </script>

        </body>
        </html>
        `);
    }

    else if (routePath === "/trigger") {

        myEmitter.emit('oneTimeEvent');
        myEmitter.emit('oneTimeEvent');
        myEmitter.emit('regularEvent');
        myEmitter.emit('customEvent', 'Loan Given Successfully');

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
