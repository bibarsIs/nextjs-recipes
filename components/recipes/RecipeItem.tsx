import { Recipe } from "@prisma/client";

export default function RecipeItem({ recipe }: {
    recipe: Recipe
}) {
    return (
        <li>
            <div>
                <h4 className='font-semibold text-2xl capitalize'>{ recipe.title }</h4>
                { recipe.instructions }
            </div>
        </li>
    );
}
