#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import pc from "picocolors";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_FILE_NAME = "resourceflow.config.js";
const CONFIG_FILE_PATH = path.resolve(process.cwd(), CONFIG_FILE_NAME);

async function loadConfig() {
    if (!fs.existsSync(CONFIG_FILE_PATH)) {
        console.error(pc.red(`Error: '${CONFIG_FILE_NAME}' not found.`));
        console.error(pc.yellow(`Please run 'npx resourceflow init' to create '${CONFIG_FILE_NAME}'.`));
        process.exit(1);
    }

    console.log(pc.blue(`Loading config file...`));
    console.log(pc.cyan(`Located in directory: ${__dirname}`));

    const config = await import(CONFIG_FILE_PATH);
    return config.default || config;
}

async function resourceFlow() {
    const config = await loadConfig();
    const { resourceFlow } = config;

    if (!Array.isArray(resourceFlow)) {
        console.error(pc.red(`Error: 'resourceFlow' in config file must be an array.`));
        process.exit(1);
    }

    for (const { source, destination } of resourceFlow) {
        const sourcePath = path.resolve(process.cwd(), source);
        const destPath = path.resolve(process.cwd(), destination);

        try {
            console.log(pc.blue(`Starting copy: ${pc.cyan(sourcePath)} → ${pc.cyan(destPath)}`));
            await fs.copy(sourcePath, destPath);
            console.log(pc.green(`Success: ${pc.cyan(sourcePath)} → ${pc.cyan(destPath)} copied successfully.`));
        } catch (err) {
            console.error(pc.red(`Error: Failed to copy ${pc.cyan(sourcePath)} → ${pc.cyan(destPath)}.`));
            console.error(pc.red(`Details: ${err.message}`));
        }
    }

    console.log(pc.blue(`Copy process executed by CLI tool located in '${__dirname}' directory.`));
}

const [,, command] = process.argv;

if (command === "init") {
    const { initConfig } = await import("./init.js");
    initConfig();
} else {
    resourceFlow();
}
