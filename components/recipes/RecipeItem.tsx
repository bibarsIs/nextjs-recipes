import { Recipe } from "@prisma/client";
import Link from "next/link";

export default function RecipeItem({ recipe }: {
    recipe: Recipe
}) {
    return (
            <div>
                <h4 className='font-semibold text-2xl capitalize'><Link href={`/recipes/${recipe.title}`} >{ recipe.title }</Link></h4>
                { recipe.instructions }
            </div>
    );
}
