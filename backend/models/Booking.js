import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tourPackage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TourPackage",
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true,
        min: 1
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    }
},
    {timestamps: true}
);

const bookingModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default bookingModel