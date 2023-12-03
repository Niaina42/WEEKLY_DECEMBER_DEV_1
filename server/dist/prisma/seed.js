"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma = new client_1.PrismaClient();
const french = async () => {
    var e_1, _a;
    // French Dictionary Data
    let french = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'liste_francais.txt'), 'utf8');
    let frenchDictionary = french.split("\n");
    try {
        for (var frenchDictionary_1 = __asyncValues(frenchDictionary), frenchDictionary_1_1; frenchDictionary_1_1 = await frenchDictionary_1.next(), !frenchDictionary_1_1.done;) {
            let word = frenchDictionary_1_1.value;
            let data = {
                word,
                length: word.length
            };
            let res = await prisma.frenchWords.upsert({
                where: { word: word },
                update: {},
                create: data,
            });
            console.log(`French dictionary creation...`);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (frenchDictionary_1_1 && !frenchDictionary_1_1.done && (_a = frenchDictionary_1.return)) await _a.call(frenchDictionary_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log("French dictionary created");
};
const english = async () => {
    var e_2, _a;
    // Anglais Dictionary Data
    let french = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'liste_anglais.txt'), 'utf8');
    let frenchDictionary = french.split("\n");
    try {
        for (var frenchDictionary_2 = __asyncValues(frenchDictionary), frenchDictionary_2_1; frenchDictionary_2_1 = await frenchDictionary_2.next(), !frenchDictionary_2_1.done;) {
            let word = frenchDictionary_2_1.value;
            let data = {
                word,
                length: word.length
            };
            let res = await prisma.englishWords.upsert({
                where: { word: word },
                update: {},
                create: data,
            });
            console.log(`English dictionary creation...`);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (frenchDictionary_2_1 && !frenchDictionary_2_1.done && (_a = frenchDictionary_2.return)) await _a.call(frenchDictionary_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    console.log("English dictionary created");
};
const malagasy = async () => {
    var e_3, _a;
    // Malagasy Dictionary Data
    let french = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'liste_malagasy.txt'), 'utf8');
    let frenchDictionary = french.split("\n");
    try {
        for (var frenchDictionary_3 = __asyncValues(frenchDictionary), frenchDictionary_3_1; frenchDictionary_3_1 = await frenchDictionary_3.next(), !frenchDictionary_3_1.done;) {
            let word = frenchDictionary_3_1.value;
            let data = {
                word,
                length: word.length
            };
            if (word.length) {
                let res = await prisma.malagasyWords.upsert({
                    where: { word: word },
                    update: {},
                    create: data,
                });
                console.log(`Malagasy dictionary creation...`);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (frenchDictionary_3_1 && !frenchDictionary_3_1.done && (_a = frenchDictionary_3.return)) await _a.call(frenchDictionary_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    console.log("Malagasy dictionary created");
};
async function main() {
    console.log(`==> Creation of all dictionary, please wait for a minute.`);
    await french();
    await english();
    await malagasy();
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map