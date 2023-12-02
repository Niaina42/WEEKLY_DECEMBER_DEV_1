import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async (lang: string) => {
        switch(lang) {
            case "fr": 
                let frResult = await prisma.frenchWords.findMany()
                return frResult
            case "en": 
                let enResult = await prisma.englishWords.findMany()
                return enResult
            case "mg": 
                let mgResult = await prisma.malagasyWords.findMany()
                return mgResult
        }
    },
    checkWord: async (word: string, lang: string) => {
        switch(lang) {
            case "fr": 
                let frResult = await prisma.frenchWords.findUnique({
                    where: {
                        word: word
                    }
                })
                return frResult
            case "en": 
                let enResult = await prisma.englishWords.findMany({
                    where: {
                        word: word
                    }
                })
                return enResult
            case "mg": 
                let mgResult = await prisma.malagasyWords.findMany({
                    where: {
                        word: word
                    }
                })
                return mgResult
        }
    },
    getRelatedWord: async (word: string, lang: string) => {
        switch(lang) {
            case "fr": 
                let frResult = await prisma.frenchWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                })
                return frResult
            case "en": 
                let enResult = await prisma.englishWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                })
                return enResult
            case "mg": 
                let mgResult = await prisma.malagasyWords.findMany({
                    where: {
                        length: word.length,
                        word: {
                            startsWith: word[0]
                        }
                    }
                })
                return mgResult
        }
        
        return {} 
    },
}

export default model