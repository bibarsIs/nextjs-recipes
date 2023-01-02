import React from "react";

export default function AddedIngredientItem({onClick, children}: {
    onClick: React.MouseEventHandler,
    children: string
}) {
    return (
        <li onClick={onClick} className={`cursor-pointer select-none font-light m-2 p-2 px-4 bg-rose-800 text-white rounded-full`}>{children} x</li>
    );
}