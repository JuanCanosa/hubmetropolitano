#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const ssh2_1 = require("ssh2");
const server = new index_js_1.Server({
    name: "hubmetropolitano-ssh-mcp",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
const SSH_HOST = process.env.SSH_HOST || "72.61.45.243";
const SSH_PORT = parseInt(process.env.SSH_PORT || "22", 10);
const SSH_USER = process.env.SSH_USER || "root";
const SSH_PASSWORD = process.env.SSH_PASSWORD || "vAuWM@fgfY?gx2Nom@8W";
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "run_ssh_command",
                description: "Executa comandos bash no servidor remoto via SSH e retorna o output.",
                inputSchema: {
                    type: "object",
                    properties: {
                        command: {
                            type: "string",
                            description: "O comando bash a ser executado.",
                        },
                    },
                    required: ["command"],
                },
            },
        ],
    };
});
async function executeCommand(cmd) {
    return new Promise((resolve, reject) => {
        const conn = new ssh2_1.Client();
        conn
            .on("ready", () => {
            conn.exec(cmd, (err, stream) => {
                if (err) {
                    conn.end();
                    return reject(err);
                }
                let output = "";
                stream
                    .on("close", (code, signal) => {
                    conn.end();
                    resolve(output || `(Exited with code ${code})`);
                })
                    .on("data", (data) => {
                    output += data;
                })
                    .stderr.on("data", (data) => {
                    output += data; // Include stderr in output stream
                });
            });
        })
            .on("error", (err) => {
            reject(err);
        })
            .connect({
            host: SSH_HOST,
            port: SSH_PORT,
            username: SSH_USER,
            password: SSH_PASSWORD,
            readyTimeout: 10000
        });
    });
}
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    try {
        if (request.params.name === "run_ssh_command") {
            const args = request.params.arguments || {};
            const cmd = args.command;
            if (!cmd) {
                throw new Error("Missing required argument: command");
            }
            const result = await executeCommand(cmd);
            return {
                content: [{ type: "text", text: result }],
            };
        }
        throw new Error(`Tool unknown: ${request.params.name}`);
    }
    catch (error) {
        return {
            content: [{ type: "text", text: `Error: ${error.message}` }],
            isError: true,
        };
    }
});
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.log("SSH MCP Server running on stdio");
}
main().catch(console.error);
