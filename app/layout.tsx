import './globals.css'
import React from "react";
import localFont from '@next/font/local';
import Navbar from "../components/Navbar";

const inter = localFont({ src: '../fonts/Inter.ttf'})

//tailwind variable not yet working for me as of december 2022
/*const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    variable: '--font-zilla-slab',
    weight: '400',
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
