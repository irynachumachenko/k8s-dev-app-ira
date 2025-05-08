import fs from "fs";
import path from "path";

import { createServer } from "vite";

const logDir = path.resolve("./logs");
const logFile = path.join(logDir, "test.log");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const runServer = async () => {
    const vite = await createServer({
        root: '.',
        server: { port: 1234, host: true },
    });

    await vite.listen();

    console.log("Server running at:");
    vite.printUrls();

    fs.appendFileSync(logFile, `App started at: ${new Date().toISOString()}\n`);
};

runServer();
