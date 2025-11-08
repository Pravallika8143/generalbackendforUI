import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipesApi"


function Recipes(){
     var {isLoading,data}=useGetAllRecipesQuery();
    return (
        <div className="border border-3 m-3 p-3 border-dark">
            <h1>Recipes</h1>
            {isLoading && <h5>Loading... Recipes...</h5>}
            {!isLoading && (
                <ul className="d-flex flex-wrap list-unstyled justify-content-between p-3">
                    {
                       data?.recipes.map((recipe)=>{
                        return (
                            <li className="p-3">
                                <h4>{recipe.name}</h4>
                                <img src={recipe.image}width="150px" alt=""/>
                            </li>
                        )
                       }) 
                    }
                </ul>
            )}
        </div>
    )
}
export default Recipes