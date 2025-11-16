const mongoose = require("mongoose");
const express = require("express")

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://ritikmalviya40_db_user:Hhw9HqOM7VJwyYKo@code-connect.ly5itvp.mongodb.net/?appName=code-connect")

}
module.exports = connectDB;


