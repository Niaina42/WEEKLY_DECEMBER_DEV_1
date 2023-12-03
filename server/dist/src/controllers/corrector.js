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
const corrector_1 = __importDefault(require("../models/corrector"));
const services_1 = require("../services/services");
const getLevenshteinWord = (word, qWords) => {
    let resultArr = [];
    qWords.forEach((q) => {
        resultArr.push({
            word: q.word,
            distance: parseInt((0, services_1.levenshteinDistance)(word, q.word))
        });
    });
    resultArr.sort((a, b) => {
        return a.distance - b.distance;
    });
    // Gte only the first 6
    let response = [];
    for (let i = 0; i < resultArr.length && i < 6; i++) {
        response.push(resultArr[i]);
    }
    return response;
};
const geTextCorrection = async (text, lang) => {
    var e_1, _a;
    let textArray = text.split(" ");
    // if we want to map all word
    // let qWords = await model.getAll(lang)
    let corrections = [];
    try {
        for (var textArray_1 = __asyncValues(textArray), textArray_1_1; textArray_1_1 = await textArray_1.next(), !textArray_1_1.done;) {
            let word = textArray_1_1.value;
            word = word.trim().replace("<br>", "");
            let exist = await corrector_1.default.checkWord(word, lang);
            if (!exist || !exist.length) {
                // if we want to get equal wort length
                let qWords = await corrector_1.default.getRelatedWord(word, lang);
                if (qWords) {
                    let arr = {
                        word,
                        correction: getLevenshteinWord(word, qWords)
                    };
                    corrections.push(arr);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (textArray_1_1 && !textArray_1_1.done && (_a = textArray_1.return)) await _a.call(textArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return corrections;
};
const controller = {
    getCorrection: async (req, res) => {
        let { text, lang } = req.body;
        try {
            let corrections = await geTextCorrection(text.toLowerCase(), lang);
            let incorrect_words = [];
            corrections.forEach((correct) => {
                incorrect_words.push(correct.word);
            });
            if (corrections) {
                res.status(200).send({
                    incorrect_words,
                    corrections
                });
            }
            else
                res.status(200).send([]);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
    getDictionary: async (req, res) => {
        let { lang } = req.body;
        try {
            let dictionary = await corrector_1.default.getAll(lang);
            if (dictionary) {
                res.status(200).send(dictionary);
            }
            else
                res.status(200).send([]);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    }
};
exports.default = controller;
//# sourceMappingURL=corrector.js.map