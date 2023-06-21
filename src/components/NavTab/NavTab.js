import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const { t } = useTranslation()
    const navLinks = [
        { to: '/', text: t('navLinks.blog') },
        { to: '/archive', text: t('navLinks.archive') },
        { to: '/recovery', text: t('navLinks.recoveryProgram') },
        { to: '/press', text: t('navLinks.press') },
    ]

    return (
        <nav className='relative flex px-3 items-start justify-start w-full sm:p-0 sm:items-center sm:justify-center bg-white shadow-lg'>
            <ul className='flex flex-col items-start sm:flex-row gap-3 py-3 sm:py-0 sm:gap-0 '>
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
