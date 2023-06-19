import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'
import SideBarRight from '../../components/SideBarRight/SideBarRight'

export const Archive = () => {
    // фильтруем события, которые уже прошли
    const pastEvents = eventsBlog.filter(event => new Date(event.date) <= new Date());

    return (
        <>
            <section className='container w-full flex gap-10 pt-10'>
                <EventGrid eventsBlog={pastEvents} />
                <SideBarRight />
            </section>
        </>
    )
}