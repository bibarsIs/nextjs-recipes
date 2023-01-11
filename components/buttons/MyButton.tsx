import '../../app/globals.css'
import React from "react";

export default function MyButton({ type, onClick, children, color = 'bg-blue-600'}: {
    type: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler,
    children: string,
    color?: string,
}) {
    return (
        <button type={ type } onClick={ onClick }
                className={ `
                text-white ${color} 
                ${color === 'white' 
                    ? 'border border-blue-500 text-blue-500 hover:bg-blue-50 hover:border-blue-600' 
                    : ''}
                font-medium py-2 px-4 m-2 hover:bg-blue-800 transition-colors rounded` }>
            { children }
        </button>
    );
}

