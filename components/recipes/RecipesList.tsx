import RecipeItem from "./RecipeItem";
import { Recipe } from "@prisma/client";

export default function RecipesList({recipes}: {
    recipes: Recipe[]
}) {
    return (
        <ul>
            {recipes.map((recipe: any) => {
                return <li key={recipe.id}><RecipeItem recipe={recipe}></RecipeItem></li>
            })}
        </ul>
    );
}
