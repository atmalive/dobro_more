import { FacebookFooterIcon, GithubFooterIcon, InstagramFooterIcon } from '../../utils/Icons'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import footerBg from '../../images/underwater.webp'


const Footer = () => {
    const { t, i18n } = useTranslation()

    return (
        <footer className='bg-white mt-12'>
            <div className='container mx-auto w-full max-w-screen-x2'>
                <div className='px-4 py-6 bg-gray-100 md:flex md:items-end md:justify-between'>
                    <span className='text-sm text-gray-500 sm:text-center'>
                        © 2023 <a href='#'>DobroMore™</a>. All Rights Reserved.
                    </span>



                    <div className='flex mt-4 space-x-6 sm:justify-center md:mt-0'>
                        <a href='#' className='text-gray-400 hover:text-gray-900'>
                            <FacebookFooterIcon />
                            <span className='sr-only'>Facebook page</span>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-gray-900'>
                            <InstagramFooterIcon />
                            <span className='sr-only'>Instagram page</span>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-gray-900'>
                            <GithubFooterIcon />
                            <span className='sr-only'>GitHub account</span>
                        </a>
                    </div>
                    <ul className='text-gray-500 font-medium text-center flex flex-col gap-4 w-full max-w-sm justify-between items-end'>
                        <li className=''>
                            <NavLink
                                className='transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-900'
                                to='/about'
                            >
                                About
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                className='transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-900'
                                to='/team'
                            >
                                Team
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                className='transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-900'
                                to='/donate'
                            >
                                Donate
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
