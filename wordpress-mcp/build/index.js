#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const axios_1 = __importDefault(require("axios"));
// Configuração da API do WordPress (Ajuste a URL conforme o ambiente real do usuário posteriormente)
const WP_API_BASE_URL = process.env.WP_API_URL || "https://demo.wp-api.org/wp-json/wp/v2";
const wpClient = axios_1.default.create({
    baseURL: WP_API_BASE_URL,
    timeout: 10000,
});
// Inicialização do Servidor MCP
const server = new index_js_1.Server({
    name: "hubmetropolitano-wp-mcp",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
// Define as ferramentas que a IA poderá chamar
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_wp_posts",
                description: "Recupera uma lista de posts (estabelecimentos) do WordPress filtrando por categoria, busca textual ou paginação.",
                inputSchema: {
                    type: "object",
                    properties: {
                        search: {
                            type: "string",
                            description: "Termo de busca (opcional)",
                        },
                        per_page: {
                            type: "number",
                            description: "Número de resultados por página (default: 10)",
                        },
                        categories: {
                            type: "array",
                            items: { type: "number" },
                            description: "IDs das categorias para filtro (opcional)",
                        },
                    },
                },
            },
            {
                name: "get_wp_categories",
                description: "Recupera todas as categorias disponíveis no WordPress (ideal para entender a estrutura de nichos do HubMetropolitano).",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
        ],
    };
});
// Lida com as chamadas das ferramentas
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    try {
        if (request.params.name === "get_wp_posts") {
            const args = request.params.arguments || {};
            const params = {
                _embed: true, // Para trazer thumbnail e acf se exposto via rest
                per_page: typeof args.per_page === 'number' ? args.per_page : 10,
            };
            if (typeof args.search === 'string') {
                params.search = args.search;
            }
            if (Array.isArray(args.categories) && args.categories.length > 0) {
                params.categories = args.categories.join(',');
            }
            const response = await wpClient.get('/posts', { params });
            // Omit content to prevent large payload unless requested in a specific tool
            const posts = response.data.map((post) => ({
                id: post.id,
                title: post.title.rendered,
                slug: post.slug,
                excerpt: post.excerpt?.rendered || "",
                link: post.link,
            }));
            return {
                content: [{ type: "text", text: JSON.stringify(posts, null, 2) }],
            };
        }
        if (request.params.name === "get_wp_categories") {
            const response = await wpClient.get('/categories', { params: { per_page: 100 } });
            const categories = response.data.map((cat) => ({
                id: cat.id,
                name: cat.name,
                slug: cat.slug,
                count: cat.count,
            }));
            return {
                content: [{ type: "text", text: JSON.stringify(categories, null, 2) }],
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
    console.log("WordPress MCP Server runner connected and waiting for stdio communication...");
}
main().catch((err) => {
    console.error("Fatal error starting MCP Server:", err);
    process.exit(1);
});
