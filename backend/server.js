import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import authMiddleware from './middleware/authMiddleware.js'
import tourPackageRoutes from './routes/tourPackageRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoute from './routes/userRoute.js'
import multer from 'multer'
import attractionRoute from './routes/attractionRoute.js'
import festivalRoute from './routes/festivalRoute.js'

// App config
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();
connectCloudinary();

app.use('/api/tour-package', tourPackageRoutes)

app.use('/api/auth', authRoutes)
app.use('/api/user', authMiddleware, userRoute)

// app.use('/api/upload', uploadRoute)

app.use('/api/attractions', attractionRoute)
app.use('/api/festivals/', festivalRoute)

// Error handling middleware for multer errors
app.use((err, req, res, next) => {

    console.log("Multer")
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading
        console.log("Multer running")
    return res.status(400).json({ message: err.message });
  } else if (err) {
    console.log("Multer err")
    // Another error occurred
    return res.status(400).json({ message: err.message });
  }
  next();
});

// const user = await userModel.find()
// console.log(user)

app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT ${process.env.PORT}`)
})