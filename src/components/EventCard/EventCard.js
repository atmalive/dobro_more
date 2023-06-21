import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from '../Popup/Popup'
import CloseButton from '../CloseButton/CloseButton'
import ShareButton from '../ShareButton/ShareButton'

const EventCard = ({ event }) => {
    const { t } = useTranslation()
    const [isPopupOpen, setPopupOpen] = useState(false)

    const handleOpenPopup = () => {
        setPopupOpen(true)
    }

    const handleClosePopup = () => {
        setPopupOpen(false)
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleClosePopup()
            }
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])


    useEffect(() => {
        console.log('isPopupOpen', isPopupOpen)
    }, [isPopupOpen])

    return (
        <div
            onClick={handleOpenPopup}
            className='relative cursor-pointer overflow-hidden border min-h-[400px] border-gray-100 bg-white flex flex-col justify-between items-center p-5  max-w-sm rounded-xl shadow-md'
        >
            <h2 className='text-xl w-full font-bold mb-2 text-gray-900'>
                {event.title}
            </h2>
            <div className=' flex flex-col w-full items-start justify-start gap-2'>
                <p className='text-gray-600 '>Date: {event.date}</p>
                <p className='text-gray-600 '>Place: {event.country}, {event.city}</p>
            </div>
            <img
                src={
                    event.images && event.images.length > 0 ? event.images[0] : 'fallback-image-url'
                }
                alt={event.title}
                className='w-full h-48 opacity-90 object-contain cursor-pointer hover:opacity-100 transition duration-200 rounded-lg'
            />
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <div className='z-50 relative rounded-lg border border-gray-300 bg-white h-full w-full mx-auto p-6 overflow-auto flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold mb-3 text-gray-900'>
                        {event.title}
                    </h1>

                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                            <p className='text-gray-600 mb-2'>Date: {event.date}</p>
                            <p className='text-gray-600 mb-2'>Place: {event.country}, {event.city}</p>
                            <p className='text-gray-900 mb-2 max-w-sm'>{event.description.join(' ')}</p>
                        </div>
                    <div className=' w-full h-full flex justify-center items-center'>
                        <img
                            src={
                                event.images && event.images.length > 0 ? event.images[0] : 'fallback-image-url'
                            }
                            alt={event.title}
                            className='w-full h-80 rounded-lg opacity-80 object-contain'
                        />
                    </div>
                    <div className='absolute bottom-5 right-3'>
                        <ShareButton/>
                    </div>

                    <div className='flex-grow'></div>
                    <button className='text-center'>
                        <a
                            href={event.registrationLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-4 inline-block bg-blue-500 text-white py-2 px-8 rounded-md'
                        >
                            {t('eventCard.register')}
                        </a>
                    </button>
                </div>

                <CloseButton
                    position={'absolute top-0 right-0 border sm:-right-50'}
                    onClose={handleClosePopup}
                />
            </Popup>
        </div>
    )
}

export default EventCard
