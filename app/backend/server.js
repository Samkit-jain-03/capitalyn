import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(200);
        return res.end();
    }

    const parsedUrl = url.parse(req.url, true);
    const routePath = parsedUrl.pathname;

    // ROUTING
    if (routePath === "/") {

        fs.readFile(path.join(__dirname, "../public/lab.html"), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading HTML");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    }

    // READ JSON
    else if (routePath === "/customers" && req.method === "GET") {

        fs.readFile(path.join(__dirname, "data.json"), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error reading file");
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });

    }

    // WRITE JSON
    else if (routePath === "/addCustomer" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const newCustomer = JSON.parse(body);

            fs.readFile(path.join(__dirname, "data.json"), (err, data) => {

                const customers = JSON.parse(data);
                customers.push(newCustomer);

                fs.writeFile(
                    path.join(__dirname, "data.json"),
                    JSON.stringify(customers, null, 2),
                    (err) => {
                        if (err) {
                            res.writeHead(500);
                            return res.end("Error writing file");
                        }

                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ message: "Customer Added Successfully" }));
                    }
                );

            });

        });

    }

    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
