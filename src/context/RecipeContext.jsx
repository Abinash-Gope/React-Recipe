import { createContext } from "react";

export const recipeContext = createContext();

const RecipeProvider = ({ children }) => {
  return <recipeContext.Provider>{children}</recipeContext.Provider>;
};

export default RecipeProvider;