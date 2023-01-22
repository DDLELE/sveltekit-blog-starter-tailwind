import sharp from 'sharp';
import * as fs from "fs"

async function loopFolder (inputFolder, outputFolder) {
	const supported = ["png", "jpg", "jpeg"]
	if(!fs.existsSync(outputFolder))
	{
		fs.mkdirSync(outputFolder, {recursive: true})
	}
	const files = fs.readdirSync(inputFolder)
	for(const file of files) {
		const ending = file.split(".")
		const extension = ending[ending.length-1]
		if(!supported.includes(extension))
		{
			// console.log(`${file} skipped!`)
			continue
		}
		const input = `${inputFolder}/${file}`
		const outputAvif = `${outputFolder}/${file.substring(0,file.length-extension.length)}avif`
		const outputWebp = `${outputFolder}/${file.substring(0,file.length-extension.length)}webp`
		if(!fs.existsSync(outputAvif)) await convertToAvif(input, outputAvif)
		if(!fs.existsSync(outputWebp)) await convertToWebp(input, outputWebp)
	}
}

async function convertToAvif(inputFile, outputFile) {
    await sharp(inputFile)
        .toFormat('avif')
        .toFile(outputFile)
}

async function convertToWebp(inputFile, outputFile) {
    await sharp(inputFile)
        .toFormat('webp')
        .toFile(outputFile)
}


export const optimizeImages = async ({inputFolder, outputFolder}) => ({
	name: 'optimize-images',
	configResolved: async () => {
	  await loopFolder(inputFolder, outputFolder)
	},
	handleHotUpdate: async () => {
		await loopFolder(inputFolder, outputFolder)
	}
  })