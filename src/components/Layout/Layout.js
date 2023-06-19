import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export const Layout = () => {
    return (
        <div className={'min-h-screen bg-white'}>
            <Header />
            <main className='container mt-16 sm:mt-0 min-h-screen mx-auto flex flex-col justify-start items-center bg-white text-primary'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
