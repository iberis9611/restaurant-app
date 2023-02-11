const HighlightCard = () => {
  return (
    <section className="highlight card">
      <h2 className="highlight__h2 offscreen">HighLights</h2>
      <article className="highlight__article">
        <svg width="73" height="10" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <path stroke="#8f8f8f" id="svg_1" d="m15,5l57,0" opacity="undefined" strokeLinecap="undefined" strokeLinejoin="undefined" fill="none"/>
            <ellipse ry="3.5" rx="3.5" id="svg_3" cy="5" cx="5" stroke="#8f8f8f" fill="none"/>
          </g>
        </svg>
        <h2 className="highlight__h2">A few highlights from our menu</h2>
        <p className="highlight__p">We cater for all dietary requirements, but here's a glimpse at some of our diner's favorites. Our menu is revamped every season.</p>
      </article>
      <article className="highlight__article">
        <h2 className="highlight__h2 offscreen">HighLights Segment</h2>
        <figure className="highlight__figure">
          <picture className="highlight__picture">
            <source media="(min-width: 768px)" srcSet={ require("../images/tablet/seared-salmon-fillet-tablet.jpg") } />
            <img className="highlight__image" src={ require("../images/mobile/seared-salmon-fillet-mobile.jpg") } alt="Salmon" />
          </picture>
          <figcaption className="highlight__figcaption">
            <h3 className="highlight__h3">Seared Salmon Fillet</h3>
            <p className="highlight__p">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
          </figcaption>
        </figure>
        <figure className="highlight__figure divider">
          <picture className="highlight__picture">
            <source media="(min-width: 768px)" srcSet={ require("../images/tablet/fresh-oysters-tablet.jpg") } />
            <img className="highlight__image" src={ require("../images/mobile/fresh-oysters-mobile.jpg") } alt="Oysters" />
          </picture>
          <figcaption className="highlight__figcaption">
            <h3 className="highlight__h3">Fresh oysters</h3>
            <p className="highlight__p">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
          </figcaption>
        </figure>
        <figure className="highlight__figure divider">
          <picture className="highlight__picture">
            <source media="(min-width: 768px)" srcSet={ require("../images/tablet/chocolate-mousse-tablet.jpg") } />
            <img className="highlight__image" src={ require("../images/mobile/chocolate-mousse-mobile.jpg") } alt="Chocolate Mousse" />
          </picture>
          <figcaption className="highlight__figcaption">
            <h3 className="highlight__h3">Summer Fruit Chocolate Mousse</h3>
            <p className="highlight__p">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
          </figcaption>
        </figure>
      </article>
    </section>
  )
}

export default HighlightCard