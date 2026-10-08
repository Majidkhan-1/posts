const ImageKit = require("@imagekit/nodejs")

const imageKit = new ImageKit({
    privateKey:"private_wG22ShHAatAzH+HvsUlCOPf8+iY="
})

async function uploadFile(buffer) {
    const result =await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result
    
}

module.exports = uploadFile