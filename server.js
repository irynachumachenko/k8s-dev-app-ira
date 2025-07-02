import fs from "fs";
import path from "path";

import { createServer } from "vite";

const logDir = path.resolve("./logs");
const logFile = path.join(logDir, "test.log");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const probeCheckPlugin = () => {
    return {
        name: 'probe-check',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                switch (req.url) {
                    case '/health':
                        console.log(`${new Date().toISOString()} [PROBE] Successful check for ${req.url}`);
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('OK');
                        return;

                    case '/ready':
                        console.log(`${new Date().toISOString()} [PROBE] Successful check for ${req.url}`);
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('Ready');
                        return;

                    case '/error':
                        console.log(`${new Date().toISOString()} [PROBE] Failed check for ${req.url}`);
                        res.writeHead(503, { 'Content-Type': 'text/plain' });
                        res.end('Service Unavailable');
                        return;

                    default:
                        next();
                        break;
                }
            });
        },
    };
}

const runServer = async () => {
    const vite = await createServer({
        plugins: [probeCheckPlugin()],
        root: '.',
        server: { port: 1234, host: true },
        mode: process.env.MODE
    });

    await vite.listen();

    console.log(`Server running at:`);
    vite.printUrls();

    fs.appendFileSync(logFile, `App started at: ${new Date().toISOString()}\n`);
};

void runServer();