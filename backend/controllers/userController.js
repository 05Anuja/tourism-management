import userModel from "../models/User.js";

export const handleFavourites = async (req, res) => {
    try {
        const userId = req.user.userId;
        const attractionId = req.params.id;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const exist = user.favourites.some(
            fav => fav.toString() === attractionId
        );

        if (exist) {
            user.favourites = user.favourites.filter(
                fav => !fav.equals(attractionId)
            );
        } else {
            user.favourites.push(attractionId);
        }

        await user.save();

        // populate after saving
        const updatedUser = await userModel
            .findById(userId)
            .populate("favourites", "name image");

        res.status(200).json({
            message: "Favourite updated",
            favourites: updatedUser.favourites
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};

export const getProfileData = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.userId)
        .populate('favourites')
        .populate('visitLater')
        res.json({
            favourites: user.favourites,
            visitLater: user.visitLater
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
};

export const handleVisitLater = async (req, res) => {
    try {
       const userId = req.user.userId
       const attractionId = req.params.id
       
       const user = await userModel.findById(userId)

       if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        })
       }

       const exist = user.visitLater.some(
        vL => vL.toString() === attractionId
       );

       if (exist) {
        user.visitLater = user.visitLater.filter(
            vL => !vL.equals(attractionId)
        );
       } else {
        user.visitLater.push(attractionId)
       }

       await user.save();

       const updatedUser = await userModel
       .findById(userId)
       .populate('visitLater', 'name image');

       res.status(200).json({
        message: "Visit Later updated",
        visitLater: updatedUser.visitLater
       });
       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server Error'
        })
    }
};

export const getFavourites = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.userId)
        .populate('favourites')

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        res.status(200).json(user.favourites);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getPlacesToVisit = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.userId)
        .populate('visitLater')

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        res.status(200).json(user.visitLater);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}