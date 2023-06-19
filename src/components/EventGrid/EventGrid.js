import { Fragment, useMemo, useState, useEffect } from 'react'
import EventCard from '../EventCard/EventCard'
import { useTranslation } from 'react-i18next'
import { EventsGridArrowIcon } from '../../utils/Icons'

const EventGrid = ({ eventsBlog }) => {
    const { t, i18n } = useTranslation()

    const [openMonths, setOpenMonths] = useState({})

    const groupedEvents = useMemo(() => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        const months = t('months', { returnObjects: true })

        let eventGroups = {}
        for (let i = 0; i < 12; i++) {
            const monthIndex = (currentMonth + i) % 12
            const year = currentYear + Math.floor((currentMonth + i) / 12)
            eventGroups[`${months[monthIndex]} ${year}`] = []
        }

        for (let event of eventsBlog) {
            const eventDate = new Date(event.date)
            const month = eventDate.getMonth()
            const year = eventDate.getFullYear()
            eventGroups[`${months[month]} ${year}`]?.push(event)
        }

        return eventGroups
    }, [eventsBlog, i18n.language])

    const toggleMonth = (month) => {
        setOpenMonths((prevOpenMonths) => ({
            ...prevOpenMonths,
            [month]: !prevOpenMonths[month],
        }))
    }

    useEffect(() => {
        let openMonthsInit = {}
        Object.keys(groupedEvents).forEach((month) => {
            openMonthsInit[month] = groupedEvents[month].length > 0
        })
        setOpenMonths(openMonthsInit)
    }, [groupedEvents])

    return (
        <div className='flex flex-col w-full'>
            {Object.keys(groupedEvents).map((month) => (
                <Fragment key={month}>
                    <div
                        className='flex gap-2 p-3 w-full cursor-pointer hover:bg-gray-200 transition duration-100'
                        onClick={() => toggleMonth(month)}
                        style={{ transition: 'background-color 0.3s ease' }}
                    >
                        <button className='hover:opacity-60 transition-opacity duration-200'>
                            <EventsGridArrowIcon openMonths={openMonths} month={month} />
                        </button>
                        <h2>{month}</h2>
                        <p>({groupedEvents[month].length})</p>
                    </div>
                    <div className='border-t border-opacity-50 border-gray-700 w-full my-2 opacity-70'></div>

                    {openMonths[month] && (
                        <section
                            className={
                                'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 w-full'
                            }
                        >
                            {groupedEvents[month].map((event, id) => (
                                <EventCard key={id} event={event} />
                            ))}
                        </section>
                    )}
                </Fragment>
            ))}
        </div>
    )
}

export default EventGrid
