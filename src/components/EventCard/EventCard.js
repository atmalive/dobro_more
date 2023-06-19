import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from '../Popup/Popup'
import CloseButton from '../CloseButton/CloseButton'


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
            className='relative rounded-lg overflow-hidden border max-w-sm min-h-[400px] border-gray-300 bg-white flex flex-col justify-between items-center'
        >
            <div className='p-4 cursor-pointer flex flex-col items-center justify-start '>
                <h2 className='text-xl font-bold mb-2 text-gray-900'>
                    {event.title}
                </h2>
                <p className='text-gray-600 '>{event.date}</p>
                <p className='text-gray-600 '>{event.place}</p>
                <p className='text-gray-600 '>{event.type}</p>

            </div>
            <img
                src={
                    event.images && event.images.length > 0 ? event.images[0] : 'fallback-image-url'
                }
                alt={event.title}
                className='w-full h-48 opacity-80 object-contain cursor-pointer hover:scale-105 hover:opacity-100 transition duration-300'
            />
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <div className='z-50 rounded-lg border border-gray-300 bg-white h-full w-full mx-auto p-6 overflow-auto flex flex-col'>
                    <div className='flex w-full  justify-start items-center'>
                        <div className='flex-1 w-full justify-start items-center'>
                            <h1 className='text-4xl font-bold mb-3 text-gray-900'>
                                {event.title}
                            </h1>
                            <p className='text-gray-600 mb-2'>{event.date}</p>
                            <p className='text-gray-600 mb-2'>{event.place}</p>
                        </div>
                    </div>

                    <div className='flex-grow'></div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-between w-1/2 pr-2'>
                            <div className='relative mb-4 h-[30vh] w-[100%]'>
                                <iframe
                                    className='absolute inset-0 w-full h-full'
                                    src='https://www.google.com/maps/embed?...'
                                    title='Google Map'
                                />
                            </div>
                        </div>
                    </div>

                    <button className='text-center'>
                        <a
                            href={event.link}
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
