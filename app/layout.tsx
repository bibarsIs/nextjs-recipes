import './globals.css'
import React from "react";
import {Inter} from '@next/font/google'
import Navbar from "../components/Navbar";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

// not yet working as of december 2022
/*const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    variable: '--font-zilla-slab',
    weight: '300',
})

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: '100'
})*/


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang='en' className={inter.className}>
        <body>
        <div className='font-roboto'>
            <Navbar></Navbar>
        </div>
        {children}
        </body>
        </html>
    );
}
