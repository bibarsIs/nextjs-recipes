import '../../app/globals.css'
import React from "react";
import {Zilla_Slab} from '@next/font/google'

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    variable: '--font-zilla-slab',
    weight: ['600'],
})

export default function ButtonBrutal({type, onClick, children} : {type: "button" | "submit" | "reset" | undefined, onClick :React.MouseEventHandler, children: string}) {

    return (
        <button type={type} onClick={onClick} className={`${zillaSlab.className} 
        font-medium border-4 border-black p-3 m-2 shadow-brutal shadow-yellow-400 rounded-xl 
        focus:translate-x-2 focus:translate-y-2 focus:shadow-transparent 
        transition-transform`}>
            {children}
        </button>
    );
}

