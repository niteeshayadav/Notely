const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect("mongodb+srv://niteeshayadav:3bSR2zPiiiEgmjga@notes-cluster.lopau6u.mongodb.net/notes_db");
        console.log("connected to DB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectDB;