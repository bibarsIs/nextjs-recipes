import React, { useState } from "react";
import { Ingredient } from "@prisma/client";

export default function IngredientItem({ onClick, children: ingredient }: {
    onClick: (ingredient: Ingredient) => void,
    children: Ingredient,
}) {


    const [isSelected, setIsSelected] = useState(false)

    return (
        <div>
            <label className='cursor-pointer select-none font-light p-4 bg-yellow-400 rounded'
                   htmlFor={ ingredient.title }
            >{ ingredient.title }</label>
            <input type='checkbox'
                   onChange={ () => onClick(ingredient) }
                   name={ ingredient.title }
                   id={ ingredient.title }
                   value={ ingredient.id }
                   defaultChecked={ isSelected }
            ></input>
        </div>
    );
}