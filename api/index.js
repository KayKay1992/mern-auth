
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('Connected to MongoDB')})
        .catch(err => {
        console.error(err);    
    })
  
app.listen(3000, () => {
    console.log('Server running on port 3000');
})

app.use('/api/user', userRoutes);