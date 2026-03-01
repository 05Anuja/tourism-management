import {v2 as cloudinary} from 'cloudinary'
import festivalModel from '../models/Festival.js'
import Festivals from '../models/Festival.js'

export const addFestival = async (req, res) => {
    try {
        const {name, description, month, location} = req.body
        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            })
        }

        const result = await new Promise ((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream (
                {
                    folder: 'ratnagiri_tourism',
                },
            (err, result) => {
                if (err) reject (err);
                else resolve(result);
            });
            uploadStream.end(req.file.buffer);
        })

        const festival = await festivalModel.create({
            name, 
            description,
            month,
            location, 
            image: result.secure_url,
        })

        res.status(201).json(festival);

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getAllFestivals = async (req, res) => {
    try {
        const festivals = await Festivals.find();
        res.status(200).json(festivals)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}