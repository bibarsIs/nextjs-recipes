import RecipeItem from "./RecipeItem";
import { Recipe } from "@prisma/client";

export default function RecipesList({ recipes }: {
    recipes: Recipe[]
}) {
    return (
        <div>
            {recipes.length!==0 ? <h2 className='font-semibold text-2xl'>Found recipes: </h2> : ''}
            <ul>
                { recipes.map((recipe: any) => {
                    return <li key={ recipe.id }><RecipeItem recipe={ recipe }></RecipeItem></li>
                }) }
            </ul>
        </div>
    );
}
