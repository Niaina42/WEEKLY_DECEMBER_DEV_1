"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const corrector_1 = __importDefault(require("./routes/corrector"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/api', (req, res) => {
    res.send('Hello from CorrectorPro API');
});
app.use('/api/users', users_1.default);
app.use('/api/corrector', corrector_1.default);
app.listen(9002, () => console.log("Api listen on port 9002"));
//# sourceMappingURL=main.js.map