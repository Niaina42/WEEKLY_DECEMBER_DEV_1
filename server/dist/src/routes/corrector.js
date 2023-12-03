"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const corrector_1 = __importDefault(require("../controllers/corrector"));
const router = express_1.default.Router();
router.get("/dictionary", corrector_1.default.getDictionary);
router.post("/", corrector_1.default.getCorrection);
exports.default = router;
//# sourceMappingURL=corrector.js.map