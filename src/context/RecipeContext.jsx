import { createContext } from "react";

export const recipeContext = createContext();

const recipeProvider = ({ Children }) => {
  return <recipeContext.Provider>{Children}</recipeContext.Provider>;
};

export default recipeProvider;