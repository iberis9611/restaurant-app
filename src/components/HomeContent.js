import EventCard from "./EventCard"
import HighlightCard from "./HighlightCard"
import IntroCard from "./IntroCard"
import ReservationCard from "./ReservationCard"

const HomeContent = () => {

    return (
        <main className="main flex">
            <IntroCard />
            <HighlightCard />
            <EventCard />
            <ReservationCard />
        </main>
    )
}

export default HomeContent