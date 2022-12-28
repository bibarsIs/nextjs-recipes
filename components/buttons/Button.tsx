import '../../app/globals.css'
import React from "react";

export default function Button({type, onClick, children} : {type: "button" | "submit" | "reset" | undefined, onClick: React.MouseEventHandler, children: string}) {
    return (
        <button type={type} onClick={onClick} className="font-medium p-3 m-2 text-white bg-blue-600 hover:bg-blue-800 transition-colors rounded shadow-md">
            {children}
        </button>
    );
}

