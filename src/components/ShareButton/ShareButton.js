import { useEffect, useRef, useState } from 'react'
import {
    FaFacebookMessenger,
    FaTwitterSquare,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaViber,
    FaLink,
    FaShareAlt,
    FaTelegram,
} from 'react-icons/fa'

const ShareButton = ({ url = '#', title = '#' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const services = [
        {
            name: 'Facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            icon: FaFacebookMessenger,
        },
        {
            name: 'Twitter',
            href: `https://twitter.com/share?url=${encodeURIComponent(
                url,
            )}&text=${encodeURIComponent(title)}`,
            icon: FaTwitterSquare,
        },
        {
            name: 'LinkedIn',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            icon: FaLinkedin,
        },
        {
            name: 'Email',
            href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
            icon: FaEnvelope,
        },
        {
            name: 'Telegram',
            href: `https://telegram.me/share/url?url=${encodeURIComponent(
                url,
            )}&text=${encodeURIComponent(title)}`,
            icon: FaTelegram,
        },
        {
            name: 'Instagram',
            href: `http://instagram.com/share?url=${encodeURIComponent(
                url,
            )}&text=${encodeURIComponent(title)}`,
            icon: FaInstagram,
        },
        {
            name: 'WhatsApp',
            href: `https://wa.me/?text=${encodeURIComponent(url)}`,
            icon: FaWhatsapp,
        },
        { name: 'Viber', href: `viber://forward?text=${encodeURIComponent(url)}`, icon: FaViber },
        { name: 'Copy link', href: url, icon: FaLink, isCopyLink: true },
    ]

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const copyToClipboard = async (url) => {
        try {
            await navigator.clipboard.writeText(url)
            alert(`Copied to clipboard: ${url}`)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    // Update the Copy Link service href with the passed URL
    services.find((service) => service.isCopyLink).href = url
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className='relative' ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className='sharebtn relative flex z-10 bg-white border rounded-md p-2 opacity-80 hover:opacity-100 focus:outline-none focus:border-blue-400'
            >
                <span className='inline-block pr-4 text-gray-600'>Share</span>
                <FaShareAlt className='h-5 w-6 my-1 text-blue-700' />
            </button>
            {isOpen && (
                <div className='sharebtn-dropdown absolute right-0 bottom-full w-48 bg-white rounded-sm overflow-hidden shadow-lg z-20 border border-gray-100'>
                    {services.map((service, index) => (
                        <a
                            key={index}
                            onClick={
                                service.isCopyLink
                                    ? (e) => {
                                          e.preventDefault()
                                          copyToClipboard(service.href)
                                          setIsOpen(false)
                                      }
                                    : () => setIsOpen(false)
                            }
                            href={service.href}
                            target={service.isCopyLink ? undefined : '_blank'}
                            rel={service.isCopyLink ? undefined : 'noopener noreferrer'}
                            className='flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100'
                        >
                            <service.icon className='w-5 h-5 mr-4 text-blue-500' />
                            <span className='text-gray-600'>{service.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ShareButton
