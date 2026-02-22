export const toggleFavourite = async (req, res) => {
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
                fav => fav.toString() !== attractionId
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
