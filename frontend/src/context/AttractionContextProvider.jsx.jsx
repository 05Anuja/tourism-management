import React, { useEffect, useState } from "react";
import { activities, attractions, festivals, planTrip, tours } from "../assets/assets";
import { AttractionContext } from "./AttractionContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AttractionContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // ⭐ FAVOURITES STATE (GLOBAL)
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // VisitLater State
  const [visitLater, setvisitLater] = useState(() => {
    const storedPlaces = localStorage.getItem('Visit_later');
    return storedPlaces ? JSON.parse(storedPlaces) : [];
  })

  // Persist favourites
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
    localStorage.setItem("visit_later", JSON.stringify(visitLater))
  }, [favourites, visitLater]);

  // ❤️ Toggle Favourite
  const toggleFavourite = (item) => {
    const exists = favourites.find((fav) => fav.id === item.id);

    if (exists) {
      setFavourites((prev) =>
        prev.filter((fav) => fav.id !== item.id)
      );
      toast.info("Removed from Favourites");
    } else {
      setFavourites((prev) => [...prev, item]);
      toast.success("Added to Favourites!");
    }
  };

  const toggleVisitLater = (item) => {
    const exists = visitLater.find((visitItem) => visitItem.id === item.id)
    if (exists) {
      setvisitLater((prev) => prev.filter((visitItem) => visitItem.id !== item.id)
    )
    toast.info("Removed from Visit Later");
    } else {
      setvisitLater((prev) => [...prev, item]);
      toast.success("Added to Visit Later");
    }
  }

  const value = {
    attractions,
    tours,
    activities,
    festivals,
    planTrip,
    favourites,
    toggleFavourite,
    visitLater,
    toggleVisitLater,
    navigate,
  };

  return (
    <AttractionContext.Provider value={value}>
      {children}
    </AttractionContext.Provider>
  );
};

export default AttractionContextProvider;
