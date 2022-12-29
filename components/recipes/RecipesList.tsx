import RecipeItem from "./RecipeItem";

export default function RecipesList({recipes}: {
    recipes: any
}) {
    return (
        <ul>
            {recipes.map((recipe: any) => {
                return <RecipeItem key={recipe} recipe={recipe}></RecipeItem>
            })}
        </ul>
    );
}
