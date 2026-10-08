const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://Majidkhan:DXt9IN0KjFlgAQp1@backend.hstssz4.mongodb.net/project-1")
    console.log("connected to DB")
}

module.exports = connectDB