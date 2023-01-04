import IngredientItem from "./IngredientItem";
import React from "react";
import { Ingredient } from "@prisma/client";

//  List of ingredients to be added to user's lists
export default function IngredientsList({ onClick, ingredients }: {
    onClick: (ingredient: Ingredient) => void,
    ingredients: Ingredient[],
}) {
    return (
        <div className='flex flex-wrap w-full'>
            { ingredients.map((ingredient) => {
                return <IngredientItem onClick={onClick}
                                       key={ ingredient.id }
                >{ ingredient }</IngredientItem>
            }) }
        </div>
    )
}