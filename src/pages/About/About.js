import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'

export const About = () => {

    return (
                <EventGrid eventsBlog={eventsBlog} />
    )
}
