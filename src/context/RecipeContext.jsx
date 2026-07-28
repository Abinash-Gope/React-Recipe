import { createContext } from "react";

export const recipeContext = createContext();

const RecipeProvider = ({ children }) => {
    
const [fromData, setFromData] = useState([]);
  return (
    <recipeContext.Provider value={{fromData, setFromData}}>{children}</recipeContext.Provider>
  );
};

export default RecipeProvider;
