import TourPackage from '../models/TourPackage.js'

// Get all the tour packages
export const getAllTourPackages = async (req, res) => {
    try {
        const tours = await TourPackage.find();
        res.status(200).json(tours)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};

// get a single tour package
export const getTourPackageById = async (req, res) => {
    try {
        const tour = await TourPackage.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({
                message: "Tour not found",
            })
        }
        res.status(200).json(tour)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// create tour package (only admin) 
export const createTourPackage = async (req, res) => {
    try {
        const {name, duration, highlights, price} = req.body

        const newTour = new TourPackage({
            name, duration, highlights, price
        });

        const savedTour = await newTour.save();
        res.status(200).json(savedTour);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// update tour package 
export const updateTourPackage = async (req, res) => {
    try {
        const updatedTour = await TourPackage.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!updatedTour) {
            return res.status(404).json({
                message: "Tour package not found!"
            })
        }    
        res.status(200).json(updatedTour)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// delte tour package 
export const deleteTourPackage = async (req, res) => {
    try {
        const deletedTour = await TourPackage.findByIdAndDelete(req.params.id);

        if(!deletedTour) {
            return res.status(404).json({
                message: "Tour package not found"
            })
        }
        res.status(200).json({
            message: "Tour Package deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}