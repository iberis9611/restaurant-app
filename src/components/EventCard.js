import Button from "./Button"

const EventCard = () => {
  return (
    <section>
      <h2 className="offscreen">Events segment</h2>
      <figure className="event card">
        <picture className="event__picture">
          <source media="(min-width: 1024px)" srcSet={ require("../images/desktop/family-gathering-desktop.jpg") } />
          <source media="(min-width: 768px)" srcSet={ require("../images/tablet/family-gathering-tablet.jpg") } />
          <img src={ require("../images/mobile/family-gathering-mobile.jpg") } alt="A FAMILY GATHERING" />
        </picture>
        <figcaption className="event__figcaption">
          <ul className="event__ul">
            <li className="event__li">FAMILY GATHERING</li>
            <li className="event__li">SPECIAL EVENTS</li>
            <li className="event__li">SOCIAL EVENTS</li>
          </ul>
          <article className="event__article">
            <h2 className="event__h2">Family Gathering</h2>
            <p className="event__p">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.</p>
          </article>
          <Button buttonText={'CHECK OUR MENU'} />
        </figcaption>
      </figure>
    </section>
  )
}

export default EventCard