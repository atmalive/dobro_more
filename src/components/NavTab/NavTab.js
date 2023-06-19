import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='relative flex  w-full items-center justify-center bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 md:flex-wrap md:justify-start'>
            <div className='flex w-full flex-wrap items-center justify-center px-3'>
                <div className='items-center lg:!flex lg:basis-auto'>
                    <ul className='mr-auto flex flex-col lg:flex-row'>
                        <li className='mb-4 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='bg-black'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/about'}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className='mb-4 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='text-neutral-700'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/'}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className='mb-4 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='text-neutral-700'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/recovery'}
                            >
                                Recovery program
                            </NavLink>
                        </li>
                        <li className='mb-2 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='text-neutral-700'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/dobroNorth'}
                            >
                                ВobroMore North
                            </NavLink>
                        </li>
                        <li className='mb-2 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='text-neutral-700'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/dobroSouth'}
                            >
                                ВobroMore South
                            </NavLink>
                        </li>
                        <li className='mb-2 lg:mb-0 lg:pr-2'>
                            <NavLink
                                activeClassName='text-neutral-700'
                                className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2'
                                to={'/press'}
                            >
                                Press
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
