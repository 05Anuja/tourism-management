import React, { useContext, useEffect, useState } from "react";
import { activities, attractions, festivals, planTrip } from "../assets/assets";
import { AttractionContext } from "./AttractionContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AttractionContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, token } = useContext(AuthContext);

  // ⭐ FAVOURITES STATE (GLOBAL)
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // ⭐ VISIT LATER STATE
  const [visitLater, setVisitLater] = useState(() => {
    const storedPlaces = localStorage.getItem("visit_later");
    return storedPlaces ? JSON.parse(storedPlaces) : [];
  });

  // Persist favourites & visit later
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
    localStorage.setItem("visit_later", JSON.stringify(visitLater));
  }, [favourites, visitLater]);

  // ❤️ Toggle Favourite (Backend)
  // const toggleFavourite = async (attractionId) => {
  //   console.log(attractionId)
  //   if (!token) {
  //     toast.error("Please Login to continue!");
  //     return;
  //   }
  //   const alreadyExists = favourites.some((fav) => fav.id === attractionId)

  //   if (alreadyExists) {
  //     setFavourites((prev) => 
  //       prev.filter((fav) => fav.id !== attractionId)
  //     );
  //     toast.info("Removed from Favourites")
  //   } else {
  //     setFavourites((prev) => 
  //     [...prev, {id: attractionId} ])
  //     toast.success("Added to Favourites")
  //   }

  //   try {

  //     const res = await axios.post(
  //       `${import.meta.env.VITE_API_BASE_URL}/api/user/toggle-favourite/${attractionId}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     setFavourites(res.data.favourites);
  //   } catch (err) {
  //     console.log(err);
  //     // toast.error("Something went wrong")
  //     setFavourites(favourites)
  //   }
  // };

  const toggleFavourite = async (attractionId) => {
  console.log("Clicked ID:", attractionId);

  if (!attractionId) {
    toast.error("Invalid attraction ID");
    console.log(token)
    return;
  }

  if (!token) {
    toast.error("Please Login to continue!");
    return;
  }


  const alreadyExists = favourites.includes(attractionId);

  // Optimistic update
  if (alreadyExists) {
    setFavourites(prev =>
      prev.filter(id => id !== attractionId)
    );
    toast.info("Removed from Favourites");
  } else {
    setFavourites(prev => [...prev, attractionId]);
    toast.success("Added to Favourites");
  }

  // console.log("Base URL", import.meta.env.VITE_API_BASE_URL)

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/toggle-favourite/${attractionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFavourites(res.data.favourites);

  } catch (err) {
    console.log(err);
  }
};


  // ⭐ Toggle Visit Later (Local)
  // const toggleVisitLater = (item) => {
  //   if (!isAuthenticated) {
  //     toast.error("Please signIn/login to continue!");
  //     return;
  //   }

  //   const exists = visitLater.find(
  //     (visitItem) => visitItem.id === item.id
  //   );

  //   if (exists) {
  //     setVisitLater((prev) =>
  //       prev.filter((visitItem) => visitItem.id !== item.id)
  //     );
  //     toast.info("Removed from Visit Later");
  //   } else {
  //     setVisitLater((prev) => [...prev, item]);
  //     toast.success("Added to Visit Later");
  //   }
  // };

  const toggleVisitLater = (item) => {
  if (!isAuthenticated) {
    toast.error("Please signIn/login to continue!");
    return;
  }

  const exists = visitLater.find(
    (visitItem) => visitItem._id === item._id
  );

  if (exists) {
    setVisitLater((prev) =>
      prev.filter((visitItem) => visitItem._id !== item._id)
    );
    toast.info("Removed from Visit Later");
  } else {
    setVisitLater((prev) => [...prev, item]);
    toast.success("Added to Visit Later");
  }
};


  // ✅ FIXED: remove warning by avoiding direct setState in effect body
  useEffect(() => {
    if (!isAuthenticated) {
      Promise.resolve().then(() => {
        setFavourites([]);
        setVisitLater([]);
      });

      localStorage.removeItem("favourites");
      localStorage.removeItem("visit_later");
    }
  }, [isAuthenticated]);

  const value = {
    attractions,
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
