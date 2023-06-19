import { FacebookFooterIcon, GithubFooterIcon, InstagramFooterIcon } from '../../utils/Icons'

const Footer = () => {
    return (
        <footer className='bg-white mt-12'>
            <div className='container mx-auto w-full max-w-screen-x2'>
                <div className='flex justify-between gap-8 px-4 py-6 lg:py-8 max-w-screen-x1'>
                    <div>
                        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                            Company
                        </h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className=' hover:underline'>
                                    About
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                            Help center
                        </h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Discord Server
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
                            Legal
                        </h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between'>
                    <span className='text-sm text-gray-500 sm:text-center'>
                        © 2023 <a href='#'>DobroMore™</a>. All Rights Reserved.
                    </span>
                    <div className='flex mt-4 space-x-6 sm:justify-center md:mt-0'>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900'
                        >
                            <FacebookFooterIcon />
                            <span className='sr-only'>Facebook page</span>
                        </a>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900'
                        >
                            <InstagramFooterIcon />
                            <span className='sr-only'>Instagram page</span>
                        </a>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-gray-900'
                        >
                            <GithubFooterIcon />
                            <span className='sr-only'>GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
