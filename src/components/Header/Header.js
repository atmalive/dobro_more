import Logo from '../Logo/Logo'
import LanguageChanger from '../LanguageChanger/LanguageChanger'
import headerBg from '../../images/header-back-rev.webp'
import NavBar from '../NavTab/NavTab'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation()

    const headerStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${headerBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Покрытие всего доступного пространства
        backgroundRepeat: 'no-repeat', // Изображение не будет повторяться
    }

    return (
        <header className={'relative w-full bg-white'}>
            <div
                className={'w-full flex flex-col justify-center items-center py-6 gap-2'}
                style={headerStyle} // Добавьте стиль здесь
            >
                <Logo />
                <h1 className='text-font bg-white bg-opacity-70 px-3 font-medium text-xl opacity-80'>
                    {t('header.title')}
                </h1>
                <div className='absolute right-3 top-3 flex items-center justify-end opacity-80 z-10'>
                    <LanguageChanger />
                </div>
            </div>

            <div className='flex static sm:relative items-center justify-center w-full'></div>

            <NavBar />
        </header>
    )
}

export default Header
