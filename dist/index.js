"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const studentRouter_1 = __importDefault(require("./Router/studentRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//other imports
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(studentRouter_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
