import { PrismaClient } from '@prisma/client'
import fs from 'fs';
import path from 'path'

const prisma = new PrismaClient()

const french = async () => {
  // French Dictionary Data
  let french = fs.readFileSync(path.resolve(__dirname, 'liste_francais.txt'), 'utf8')
  let frenchDictionary = french.split("\n")

  for await (let word of frenchDictionary) {
    let data = {
      word,
      length: word.length
    }

    let res = await prisma.frenchWords.upsert({
      where: { word: word },
      update: {},
      create: data,
    })
    console.log(`French dictionary creation...`)
  }
  console.log("French dictionary created")
}

const english = async () => {
  // Anglais Dictionary Data
  let french = fs.readFileSync(path.resolve(__dirname, 'liste_anglais.txt'), 'utf8')
  let frenchDictionary = french.split("\n")

  for await (let word of frenchDictionary) {
    let data = {
      word,
      length: word.length
    }

    let res = await prisma.englishWords.upsert({
      where: { word: word },
      update: {},
      create: data,
    })
    console.log(`English dictionary creation...`)
  }
  console.log("English dictionary created")
}

const malagasy = async () => {
  // Malagasy Dictionary Data
  let french = fs.readFileSync(path.resolve(__dirname, 'liste_malagasy.txt'), 'utf8')
  let frenchDictionary = french.split("\n")

  for await (let word of frenchDictionary) {
    let data = {
      word,
      length: word.length
    }
    if(word.length) {
      let res = await prisma.malagasyWords.upsert({
        where: { word: word },
        update: {},
        create: data,
      })
      console.log(`Malagasy dictionary creation...`)
    }
  }
  console.log("Malagasy dictionary created")
}

async function main() {
  console.log(`==> Creation of all dictionary, please wait for a minute.`)
  await french()
  await english()
  await malagasy()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
