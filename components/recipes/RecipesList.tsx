import RecipeItem from './RecipeItem';
import { Recipe } from '@prisma/client';

export default function RecipesList({ recipes }: {
    recipes: Recipe[]
}) {
    if (recipes.length !== 0)
        return (
            <div className={ `bg-yellow-200 border-2 border-black max-w-xl` }>
                <ul className={ `list-disc` }>
                    { recipes.map((recipe: any) =>
                        <li key={ recipe.id }><RecipeItem recipe={ recipe }></RecipeItem></li>
                    ) }
                </ul>
            </div>
        );
    else return <></>
}
