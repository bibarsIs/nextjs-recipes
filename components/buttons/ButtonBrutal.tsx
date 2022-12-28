import '../../app/globals.css'
import React from "react";

export default function ButtonBrutal({type, onClick, children} : {type: "button" | "submit" | "reset" | undefined, onClick :React.MouseEventHandler, children: string}) {
    return (
        <button type={type} onClick={onClick} className="font-medium border-4 border-black p-3 m-2 shadow-brutal shadow-yellow-400 rounded-xl">
            {children}
        </button>
    );
}

