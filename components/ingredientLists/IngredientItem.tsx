import React from "react";

export default function IngredientItem({onClick, isAdded, children}: {
    onClick: React.MouseEventHandler,
    isAdded: boolean,
    children: string
}) {
    return (
        <li onClick={onClick} className={`cursor-pointer font-light m-2 ${isAdded ? 'line-through' : ''}`}>{children}</li>
    );
}