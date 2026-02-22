import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import { attractions } from './data/attractionData.js';
import {v2 as cloudinary} from 'cloudinary'
import attractionModel from './models/Attraction.js';
import path from 'path'
import {fileURLToPath} from 'url'

// Connect DB
connectDB();

// Connect Cloudinary
connectCloudinary();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const seedData = async () => {
    try {
        await attractionModel.deleteMany();
        console.log('Old attractions delted')

        for (let item of attractions) {
            console.log(`Uploading ${item.image}`);
            const imagePath = path.join(__dirname, item.image)
            const result = await cloudinary.uploader.upload(imagePath, {
                folder: 'ratnagiri-tourism'
            });

            await attractionModel.create({
                name: item.name,
                description: item.description,
                category: item.category,
                location: item.location,
                bestTimeToVisit: item.bestTimeToVisit,
                mostlyVisited: item.mostlyVisited,
                image: result.secure_url
            });

            console.log(`${item.name} uploaded`)
        }

        console.log(`All attraction added successfully`)
        process.exit();

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seedData();