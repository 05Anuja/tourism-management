import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Beaches", "Forts", "Temples"],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String, // cloudinary url
        required: true
    },
    bestTimeToVisit: {
        type: String,
        required: true
    },
    mostlyVisited: {
        type: Boolean,
        default: false,
        required: true
    }
},
{timestamps: true}
);

const attractionModel = mongoose.models.Attraction || mongoose.model("Attraction", attractionSchema);

export default attractionModel;