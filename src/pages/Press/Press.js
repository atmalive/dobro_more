import EventGrid from '../../components/EventGrid/EventGrid'
import { eventsBlog } from '../../utils/eventsBlog'

export const Press = () => {

    return (
                <EventGrid eventsBlog={eventsBlog} />
    )
}
