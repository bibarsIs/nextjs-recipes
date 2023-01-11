import RecipesList from "../../components/recipes/RecipesList";

export default async function Page() {
    const response = await fetch('http://localhost:3000/api/recipes')
    const recipes = await response.json()
    return (
        <div>
            <h1 className='text-2xl'>All recipes</h1>
            <RecipesList recipes={ recipes }></RecipesList>
        </div>
    );
}
