import fs from "fs-extra";
import path from "path";
import pc from "picocolors";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_FILE_NAME = "resourceflow.config.js";
const CONFIG_FILE_PATH = path.resolve(process.cwd(), CONFIG_FILE_NAME);

const DEFAULT_CONFIG_CONTENT = `export default {
    resourceFlow: [
        {
            source: 'resources/assets',
            destination: 'public/assets'
        },
        {
            source: 'resources/images',
            destination: 'public/images'
        }
    ]
};
`;

export function initConfig() {
    if (fs.existsSync(CONFIG_FILE_PATH)) {
        console.log(pc.yellow(`Warning: '${CONFIG_FILE_NAME}' already exists. No new file was created.`));
        return;
    }

    fs.writeFileSync(CONFIG_FILE_PATH, DEFAULT_CONFIG_CONTENT, "utf-8");
    console.log(pc.green(`Success: '${CONFIG_FILE_NAME}' has been successfully created.`));

    console.log(pc.blue(`Config file was created in directory: ${pc.cyan(__dirname)}`));
}
