import React from 'react'
import { attractions } from "../assets/assets";
import { AttractionContext } from "./AttractionContext";

const AttractionContextProvider = ({children}) => {

    const value = {
        attractions,
    }

    return (
        <AttractionContext.Provider value={value}>
            {children}
        </AttractionContext.Provider>
    )
};

export default AttractionContextProvider