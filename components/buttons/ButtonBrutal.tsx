import '../../app/globals.css'
import React from "react";
import {Zilla_Slab} from '@next/font/google'

// uncomment when turbopack works
const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    variable: '--font-zilla-slab',
    weight: ['400', '500', '600'],
})

export default function ButtonBrutal({type, onClick, isClicked, children} : {
    type: "button" | "submit" | "reset" | undefined,
    onClick :React.MouseEventHandler,
    isClicked: boolean,
    children: string,
}) {

    return (
        <button type={type} onClick={onClick} className={` 
        font-medium border-4 border-black p-3 m-2 rounded-xl ${zillaSlab.variable}
        ${isClicked ? 'translate-x-2 translate-y-2 shadow-transparent' : 'shadow-brutal shadow-yellow-400'}   
        transition-transform`}>
            {children}
        </button>
    );
}

