"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const model = {
    getAll: async (lang) => {
        switch (lang) {
            case "fr":
                let frResult = await prisma.frenchWords.findMany();
                return frResult;
            case "en":
                let enResult = await prisma.englishWords.findMany();
                return enResult;
            case "mg":
                let mgResult = await prisma.malagasyWords.findMany();
                return mgResult;
        }
    },
    checkWord: async (word, lang) => {
        switch (lang) {
            case "fr":
                let frResult = await prisma.frenchWords.findUnique({
                    where: {
                        word: word
                    }
                });
                return frResult;
            case "en":
                let enResult = await prisma.englishWords.findMany({
                    where: {
                        word: word
                    }
                });
                return enResult;
            case "mg":
                let mgResult = await prisma.malagasyWords.findMany({
                    where: {
                        word: word
                    }
                });
                return mgResult;
        }
    },
    getRelatedWord: async (word, lang) => {
        switch (lang) {
            case "fr":
                let frResult = await prisma.frenchWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                });
                return frResult;
            case "en":
                let enResult = await prisma.englishWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                });
                return enResult;
            case "mg":
                let mgResult = await prisma.malagasyWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                });
                return mgResult;
        }
        return {};
    },
};
exports.default = model;
//# sourceMappingURL=corrector.js.map