import { Children, createContext } from "react";

export const RecipeContext = createContext()

const RecipeProvider = ({Children})=>{
    return(
        <RecipeContext.Provider value={}>
            {Children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider