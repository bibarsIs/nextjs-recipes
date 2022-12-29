import React from "react";

export default function AddedIngredientItem({onClick, children}: {
    onClick: React.MouseEventHandler,
    children: string
}) {
    return (
        <li onClick={onClick} className={`cursor-pointer font-light m-2`}>{children}</li>
    );
}