import Link from "next/link";

export default function Navbar() {
    return (
        <ul className='flex flex-row font-semibold'>
            <li className='pr-8'><Link href='/'><span className='border-2 border-black p-3 bg-teal-400'>Home</span></Link></li>

            <li><Link href='/recipes'>All recipes</Link></li>
{/*
            <li>Register</li>
            <li>Login</li>
*/}
        </ul>
    );
}
