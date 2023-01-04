import React, { useEffect, useState } from "react";
import { Ingredient } from "@prisma/client";

export default function IngredientItem({ onClick, children: ingredient }: {
    onClick: (ingredient: Ingredient, setIsSelected: (value: (((prevState: boolean) => boolean) | boolean)) => void) => void,
    children: Ingredient,
}) {
    const [isSelected, setIsSelected] = useState(ingredient.isAdded)
    useEffect(() => {
        setIsSelected(ingredient.isAdded)
    }, [ingredient.isAdded])

    return (
        <div>
            <label className={`
            cursor-pointer select-none font-light p-4 rounded shadow
            ${isSelected ? 'bg-yellow-400' : 'bg-neutral-100'} 
            
            `}
                   htmlFor={ ingredient.title }
            >{ ingredient.title }</label>
            <input
                hidden={true}
                className='m-1'
                type='checkbox'
                onChange={ () => onClick(ingredient, setIsSelected) }
                name={ ingredient.title }
                id={ ingredient.title }
                value={ ingredient.id }
                checked={ isSelected }
            ></input>
        </div>
    );
}