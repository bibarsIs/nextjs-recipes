import RecipeItem from "../../../components/recipes/RecipeItem";
import { Prisma } from "@prisma/client";

export default async function Page({params}: {
    params: { title: string }
}) {
    const recipeWithIngredients = Prisma.validator<Prisma.RecipeArgs>()({
        include: {
            ingredients: {
                include: {
                    ingredient: true
                }
            } },
    })
    type recipeWithIngredients = Prisma.RecipeGetPayload<typeof recipeWithIngredients>
    const recipeTitle = params.title
    const data = await fetch(`http://localhost:3000/api/recipe/${recipeTitle}`)
    const recipe: recipeWithIngredients = await data.json()
    return (
        <div>
            <RecipeItem recipe={recipe}></RecipeItem>
            <h2 className='text-xl'>Ingredients:</h2>
            <ol className='list-decimal'>
            { recipe.ingredients.map((ingredientObject) => (
                <li key={ingredientObject.ingredientId}>
                    {ingredientObject.ingredient.title}
                </li>
            ))}
            </ol>
            <h2 className='text-xl'>Instructions:</h2>
            <p>
            { recipe.instructions }</p>
        </div>
    );
}
