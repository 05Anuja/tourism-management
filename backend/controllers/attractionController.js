import attractionModel from "../models/Attraction.js";
// import  cloudinary from "../config/cloudinary.js";
import {v2 as cloudinary} from 'cloudinary'

const addAttraction = async (req, res) => {
  console.log(req.body)
  try {
    if (!req.file) {

      return res.status(400).json({ message: "Image is required" });
    }

    // Convert buffer to base64
    // const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    

      // const result = await cloudinary.uploader.upload(base64Image, {
      //   folder: "ratnagiri-tourism",
      // });
      
      // Upload image to the cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'ratnagiri_tourism', // optional folder in Cloudinary
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      // Send the file buffer to the upload stream
      uploadStream.end(req.file.buffer);
    });

    const attraction = await attractionModel.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      location: req.body.location,
      bestTimeToVisit: req.body.bestTimeToVisit,
      mostlyVisited: req.body.mostlyVisited,
      image: result.secure_url,
    });

    res.status(201).json(attraction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addAttraction };