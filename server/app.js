import cors from "cors";
import express from 'express';

import Note from './models/notes.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get('/', async (req, res) => {
   const notes = await Note.find({});
   if(!notes) {
      return res.status(404).json({ message: 'No notes found' });
   }
   res.json(notes);
});

router.post('/', async (req, res) => {
   const { name } = req.body;
   if(!name) {
      return res.status(400).json({ message: 'No name provided' });
   }
   const newNote = new Note ({ name })
   await newNote.save();
   res.status(201).json(newNote);
   console.log('Note added successfully');
})

app.use('/', router)

export default app;