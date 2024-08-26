import mongoose from 'mongoose';
import app from './app.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const baseUrl = process.env.MONGODB_URL

mongoose
   .connect(baseUrl, {
      dbName: "cicd"
   })
   .then(() => 
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
   )
   .catch((error) => console.error(error));