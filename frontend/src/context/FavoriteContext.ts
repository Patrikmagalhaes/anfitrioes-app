import { createContext } from "react";

interface FavoriteContextType {
    countFavorites: number;
    setcountFavorites: React.Dispatch<React.SetStateAction<number>>;
  }
  

  export const FavoriteContext = createContext<FavoriteContextType>({
    countFavorites: 0,
    setcountFavorites: () => {} 
  });