const ImageKit = require("@imagekit/nodejs")

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY
if (!privateKey) {
    throw new Error("IMAGEKIT_PRIVATE_KEY environment variable is required")
}

const imageKit = new ImageKit({
    privateKey
})

async function uploadFile(buffer) {
    const result =await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result
    
}

module.exports = uploadFile