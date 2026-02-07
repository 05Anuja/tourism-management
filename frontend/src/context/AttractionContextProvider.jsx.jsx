import React from 'react'
import { activities, attractions, planTrip } from "../assets/assets";
import { AttractionContext } from "./AttractionContext";

const AttractionContextProvider = ({children}) => {

    const value = {
        attractions, activities, planTrip
    }

    return (
        <AttractionContext.Provider value={value}>
            {children}
        </AttractionContext.Provider>
    )
};

export default AttractionContextProvider