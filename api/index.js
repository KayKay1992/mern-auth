import path from 'path'
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';



dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('Connected to MongoDB')})
        .catch(err => {
        console.error(err);    
    })
  
    const __dirname = path.resolve()


const app = express();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
    console.log('Server running on port 3000');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
const statusCode = err.statusCode || 500
const message = err.message || "Internal Server Error"
return res.status(statusCode).json({
    success: false,
    statusCode,
    message
})

})