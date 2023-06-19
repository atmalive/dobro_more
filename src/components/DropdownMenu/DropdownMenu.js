import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const DropdownMenu = ({ trigger, children }) => {
    const { i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        const handleLanguageChange = () => {
            setMenuOpen(!menuOpen)
        }

        i18n.on('languageChanged', handleLanguageChange)

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            i18n.off('languageChanged', handleLanguageChange)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [i18n, menuOpen])

    return (
        <div
            ref={menuRef}
            className='relative'
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            onClick={handleMenuOpen}
        >
            <div>{trigger}</div>
            {menuOpen && (
                <div className='absolute flex flex-col justify-start items-start top-full right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
                    {children}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu
