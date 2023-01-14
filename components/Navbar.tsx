'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MyButton from './buttons/MyButton';
import { RegisterButton } from './buttons/RegisterButton';
import { signIn } from 'next-auth/react';

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div>
            <ul className="flex flex-row place-items-center font-semibold">
                <li className="pr-8 hover:text-zinc-800	">
                    <Link href="/"
                          className={ `border-2 border-black p-3 bg-teal-400 ${ pathname === '/' ? 'underline' : '' }` }>Home</Link>
                </li>
                <li className={ `hover:text-zinc-600` }>
                    <Link href="/recipes" className={ `${ pathname === '/recipes' ? 'underline' : '' }` }>All
                        recipes</Link>
                </li>
                <li className={ `hover:text-zinc-600` }>
                    <Link href="/favorites"
                          className={ `${ pathname === '/favorites' ? 'underline' : '' }` }>Favorites</Link>
                </li>

                <li className="ml-auto ">
                    <RegisterButton></RegisterButton>
                </li>
                <li className="">
                    <Link href="/login">
                        <MyButton type="button" onClick={ async () => await signIn() }>Log in</MyButton>
                    </Link>
                </li>
            </ul>


        </div>

    );
}
