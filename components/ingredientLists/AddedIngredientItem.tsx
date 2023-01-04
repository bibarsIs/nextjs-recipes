import React from "react";
import { Ingredient } from "@prisma/client";

export default function AddedIngredientItem({ onClick, children: addedIngredient }: {
    onClick: (addedIngredient: Ingredient) => void,
    children: Ingredient
}) {

    return (
        <li onClick={ () => onClick(addedIngredient) }
            className={ `cursor-pointer select-none font-light m-2 p-2 px-4 bg-rose-800 text-white rounded-full` }>{ addedIngredient.title } x</li>
    );
}
