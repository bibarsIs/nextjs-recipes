import RecipesList from "../../components/recipes/RecipesList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Page() {
    const user = await prisma.user.findFirst()
    console.dir(user)
    const response = await fetch('http://localhost:3000/api/recipes')
    const recipes = await response.json()
    return (
        <div>
            <h1 className='text-2xl'>All recipes</h1>
            <RecipesList recipes={ recipes }></RecipesList>
        </div>
    );
}
