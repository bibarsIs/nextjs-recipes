import { Recipe } from "@prisma/client";
import Link from "next/link";

export default function RecipeItem({ recipe }: {
    recipe: Recipe
}) {
    return (
            <>
                <span className='font-medium text-xl capitalize hover:underline'><Link href={`/recipes/${recipe.title}`} >{ recipe.title }</Link></span>
            </>
    );
}
