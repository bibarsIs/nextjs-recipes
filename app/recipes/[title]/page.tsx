import RecipeItem from "../../../components/recipes/RecipeItem";
import { Recipe } from "@prisma/client";

export default async function Page({params}: {
    params: { title: string }
}) {

    const recipeTitle = params.title
    const data = await fetch(`http://localhost:3000/api/recipe/${recipeTitle}`)
    const recipe: Recipe = await data.json()
    return (
        <div>
            <RecipeItem recipe={recipe}></RecipeItem>
        </div>
    );
}
