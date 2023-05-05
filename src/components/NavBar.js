import Link from 'next/link';
import React from 'react'
import Logo from './Logo';

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/articles'>Articles</Link>
        </nav>
        <h2><Logo /></h2>
        <nav>
            <Link href="/" target={"_blank"} >Twitter</Link>
            <Link href="/" target={"_blank"} >Facebook</Link>
            <Link href="/" target={"_blank"} >Instagram</Link>
            <Link href="/" target={"_blank"} >LinkedIn</Link>
        </nav>
    </header>
  )
}

export default NavBar;