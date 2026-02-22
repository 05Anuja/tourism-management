import mongoose from "mongoose";

const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

const festivalModel = mongoose.models.Festivals || mongoose.model("Festival", festivalSchema);

export default festivalModel;