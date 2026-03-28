import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            attractionId: String,
            name: String,
            image: String,
            ref: "Attraction"
        }
    ],
    visitLater: [
        {
            type: mongoose.Schema.Types.ObjectId,
            attractionId: String,
            name: String,
            image: String,
            ref: "Attraction"
        }
    ],
    role : {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
}, 
{timestamps: true}
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema)

export default userModel;