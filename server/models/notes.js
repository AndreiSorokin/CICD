import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
   name: String
})

const Note = mongoose.model("Note", noteSchema);

export default Note;