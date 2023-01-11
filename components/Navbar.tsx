'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <ul className='flex flex-row font-semibold'>
            <li className='pr-8'><Link href='/'><span
                className={ `border-2 border-black p-3 bg-teal-400 ${ pathname === '/' ? 'underline' : '' }` }>Home</span></Link>
            </li>
            <li>
                <Link href='/recipes' className={ `${ pathname === '/recipes' ? 'underline' : '' }` }>All recipes</Link>
            </li>
            <li>
                <Link href='/favorites' className={ `${ pathname === '/favorites' ? 'underline' : '' }` }>Favorites</Link>
            </li>
            {/*
            <li>Register</li>
            <li>Login</li>
*/ }
        </ul>
    );
}
