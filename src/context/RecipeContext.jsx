import { createContext } from "react";

export const recipeContext = createContext();

const RecipeProvider = ({ Children }) => {
  return <recipeContext.Provider>{Children}</recipeContext.Provider>;
};

export default RecipeProvider;