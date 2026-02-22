import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true
    },
    highlights: [
        {
            type: String
        }
    ],
    price: {
        type: String,
        required: true
    },
},
{timestamps: true}
);

const tourPackageModel = mongoose.models.TourPackage || mongoose.model("TourPackage", tourPackageSchema);

export default tourPackageModel;