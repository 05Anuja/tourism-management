import React from 'react'
import { activities, attractions, planTrip } from "../assets/assets";
import { AttractionContext } from "./AttractionContext";
import { useNavigate } from 'react-router-dom';

const AttractionContextProvider = ({children}) => {

    const navigate = useNavigate();
    
    const value = {
        attractions, activities, planTrip, navigate
    }

    return (
        <AttractionContext.Provider value={value}>
            {children}
        </AttractionContext.Provider>
    )
};

export default AttractionContextProvider