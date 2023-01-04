import React, { useState } from "react";
import { Ingredient } from "@prisma/client";
import { Transition } from '@headlessui/react'

export default function AddedIngredientItem({ onClick, children: addedIngredient }: {
    onClick: (addedIngredient: Ingredient) => void,
    children: Ingredient
}) {
    const [hasAppeared, setHasAppeared] = useState(false)
    setTimeout(() => setHasAppeared(true), 0)
    return (
        <Transition
            show={ hasAppeared }
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <li onClick={ () => onClick(addedIngredient) }
                className={ `cursor-pointer select-none font-light m-2 p-2 px-4 bg-rose-800 text-white rounded-full` }>
                { addedIngredient.title } x
            </li>
        </Transition>
    );
}
