export default function RecipeItem({recipe}: {
    recipe: any
}) {
    return (
        <li>
            <h4>{recipe.name}</h4>
            {recipe.instructions}
        </li>
    );
}
