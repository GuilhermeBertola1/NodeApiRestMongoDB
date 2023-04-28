import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guilhermeBertola:guiciber123@cluster0.kyympxv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;