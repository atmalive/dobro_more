import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'
import SideBarRight from '../../components/SideBarRight/SideBarRight'

export const Blog = () => {
    // фильтруем события, которые произойдут в будущем
    const futureEvents = eventsBlog.filter(event => new Date(event.date) > new Date());

    return (
        <>
            <section className='container w-full flex flex-col sm:flex-row gap-10 pt-10'>
                <EventGrid eventsBlog={futureEvents} />
                <SideBarRight />
            </section>
        </>
    )
}