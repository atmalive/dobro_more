import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const navLinks = [
        { to: '/about', text: 'About' },
        { to: '/', text: 'Blog' },
        { to: '/archive', text: 'Archive' },
        { to: '/recovery', text: 'Recovery program' },
        { to: '/dobroNorth', text: 'ВobroMore North' },
        { to: '/dobroSouth', text: 'ВobroMore South' },
        { to: '/press', text: 'Press' },
    ];

    return (
        <nav className='relative flex w-full items-center justify-center bg-white shadow-lg'>
            <ul className='flex flex-col sm:flex-row'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            className='block transition sm:p-3 duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 menu'
                            to={link.to}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
