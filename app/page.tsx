import IngredientSearch from '../components/IngredientSearch'
import { Ingredient } from "@prisma/client";

export default async function Page() {

    const res = await fetch('http://localhost:3000/api/ingredients')
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const ingredientsFetched: Ingredient[] = await res.json()

    return (
        <div>
            <h1>Start entering the ingredient name to filter. Press enter to add the first ingredient in the list.</h1>
            <IngredientSearch ingredientsFetched={ingredientsFetched}></IngredientSearch>
        </div>
    );

}
