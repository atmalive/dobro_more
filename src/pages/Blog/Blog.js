import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'

export const Blog = () => {

    return (
                <EventGrid eventsBlog={eventsBlog} />
    )
}
