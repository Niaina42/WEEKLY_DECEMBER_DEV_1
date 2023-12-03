"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levenshteinDistance = exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const SECRET = "correctorPro";
const generateToken = (id, email) => {
    const token = jwt.sign({
        id,
        email,
    }, SECRET, {
        expiresIn: "365d"
    });
    return token;
};
exports.generateToken = generateToken;
const levenshteinDistance = (s, t) => {
    if (!s.length)
        return t.length;
    if (!t.length)
        return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
                i === 0
                    ? j
                    : Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1));
        }
    }
    return arr[t.length][s.length];
};
exports.levenshteinDistance = levenshteinDistance;
//# sourceMappingURL=services.js.map