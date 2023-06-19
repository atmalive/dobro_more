import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const { t } = useTranslation()
    const navLinks = [
        { to: '/about', text: t('navLinks.about') },
        { to: '/', text: t('navLinks.blog') },
        { to: '/archive', text: t('navLinks.archive') },
        { to: '/recovery', text: t('navLinks.recoveryProgram') },
        { to: '/dobroNorth', text: t('navLinks.dobroNorth') },
        { to: '/dobroSouth', text: t('navLinks.dobroSouth') },
        { to: '/press', text: t('navLinks.press') },
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
