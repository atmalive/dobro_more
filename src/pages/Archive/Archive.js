import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'
import SideBarRight from '../../components/SideBarRight/SideBarRight'

export const Archive = () => {

    return (
        <>
            <section className='container w-full flex gap-10 pt-10'>
                <EventGrid eventsBlog={eventsBlog} />
                <SideBarRight />
            </section>
        </>


    )
}
