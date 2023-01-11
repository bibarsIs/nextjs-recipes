'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import MyButton from "./buttons/MyButton";
import { RegisterButton } from "./buttons/RegisterButton";

export default function Navbar() {
    const pathname = usePathname()

    // Log in on MyButton click
    function handleLoginClick() {

    }

    return (
        <div>
        <ul className='flex flex-row place-items-center font-semibold'>
            <li className='pr-8'>
                <Link href='/' className={ `border-2 border-black p-3 bg-teal-400 ${ pathname === '/' ? 'underline' : '' }` }>Home</Link>
            </li>
            <li >
                <Link href='/recipes' className={ `${ pathname === '/recipes' ? 'underline' : '' }` }>All recipes</Link>
            </li>
            <li>
                <Link href='/favorites' className={ `${ pathname === '/favorites' ? 'underline' : '' }` }>Favorites</Link>
            </li>

            <li className='ml-auto'>
                <RegisterButton></RegisterButton>
            </li>
            <li className=''>
                <MyButton onClick={handleLoginClick} type='button'>Log in</MyButton>
            </li>
        </ul>



        </div>

    );
}
