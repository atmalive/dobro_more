import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import flagEn from '../../images/flags/gb.webp'
import flagRu from '../../images/flags/ru.webp'
import flagBs from '../../images/flags/ba.webp'
import flagUk from '../../images/flags/ua.webp'
import flagSr from '../../images/flags/rs.webp'
import flagMe from '../../images/flags/me.webp'
import flagDe from '../../images/flags/de.webp'
import flagFr from '../../images/flags/fr.webp'
import flagEs from '../../images/flags/es.webp'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const LanguageChanger = () => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const languages = {
        en: flagEn,
        uk: flagUk,
        ru: flagRu,
        me: flagMe,
        bs: flagBs,
        sr: flagSr,
        de: flagDe,
        fr: flagFr,
        es: flagEs,
    }

    const languageToLangAttribute = {
        en: 'en',
        uk: 'uk',
        ru: 'ru',
        me: 'me',
        bs: 'bs',
        sr: 'sr',
        de: 'de',
        fr: 'fr',
        es: 'es',
    }

    const languageToVisibleCode = {
        en: 'EN',
        uk: 'UA',
        ru: 'RU',
        me: 'ME',
        bs: 'BS',
        sr: 'RS',
        de: 'DE',
        fr: 'FR',
        es: 'ES',
    }

    const handleLanguageChange = (newLanguage) => {
        i18n.changeLanguage(newLanguage)
        setLanguage(newLanguage)
        document.documentElement.lang = languageToLangAttribute[newLanguage]
        setIsOpen(false)
        setLocalStorage('language', newLanguage) // сохраняем язык в localStorage
    }

    const dropdownRef = useRef(null)

    useEffect(() => {
        let savedLanguage = getLocalStorage('language') || i18n.language;
        if (!Object.keys(languages).includes(savedLanguage)) {
            console.warn(`Invalid language detected: ${savedLanguage}. Defaulting to 'en'.`);
            savedLanguage = 'en';
        }
        i18n.changeLanguage(savedLanguage);
        setLanguage(savedLanguage);
        document.documentElement.lang = languageToLangAttribute[savedLanguage];
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLocalStorage('language', language)
        }, 1000)
    }, [language])

    return (
        <div ref={dropdownRef} className='hs-dropdown relative mr-3 hidden sm:inline-flex'>
            <button
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                className='h-[20px] max-w-[70px] hs-dropdown-toggle py-3 px-5 inline-flex justify-center items-center gap-1 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'
            >
                <img src={languages[language]} alt={language} className='inline mr-1 h-4 w-auto' />
                {languageToVisibleCode[language]}
                <svg
                    className={`hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    width='10'
                    height='10'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                </svg>
            </button>

            <div
                className={`hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] ${
                    isOpen ? 'opacity-90' : 'hidden'
                } w-[100px] z-10 mt-2 bg-white shadow-md rounded-lg p-2 absolute top-full right-0`}
            >
                {Object.keys(languages)
                    .filter((lang) => lang !== language)
                    .map((lang) => (
                        <button
                            key={lang}
                            className='flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-1 focus:ring-blue-500'
                            onClick={() => handleLanguageChange(lang)}
                        >
                            <img
                                src={languages[lang.toLowerCase()]}
                                alt={lang}
                                className='inline mr-1 h-4 w-auto'
                            />
                            {languageToVisibleCode[lang]}
                        </button>
                    ))}
            </div>
        </div>
    )
}

export default LanguageChanger
