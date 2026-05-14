import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addWishlist = (movie) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === movie.id);

      if (exists) {
        return prev;
      }

      return [...prev, movie];
    });
  };

  const removeWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (movie) => {
    const exists = wishlist.find((item) => item.id === movie.id);

    if (exists) {
      removeWishlist(movie.id);
    } else {
      addWishlist(movie);
    }
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addWishlist,
        removeWishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
