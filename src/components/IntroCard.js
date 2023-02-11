const IntroCard = () => {
  return (
    <section className="intro card">
      <h2 className="intro__h2 offscreen">Introduction</h2>
      <figure className="intro__figure">
        <picture className="intro__picture intro__picture__first">
          <source media="(min-width: 1024px)" srcSet={ require("../images/desktop/sheep-valley-desktop.jpg") } />
          <source media="(min-width: 768px)" srcSet={ require("../images/tablet/sheep-valley-tablet.jpg") } />
          <img 
            className="intro__image intro__image-top"
            src={ require("../images/mobile/sheep-valley-mobile.jpg") } 
            alt="Sheep Farm" 
          />
        </picture>
        <figcaption className="intro__figcation">
          <svg width="73" height="10" xmlns="http://www.w3.org/2000/svg">
            <g>
            <title>Layer 1</title>
            <path stroke="#a06405" id="svg_1" d="m15,5l57,0" opacity="undefined" strokeLinecap="undefined" strokeLinejoin="undefined" fill="none"/>
            <ellipse ry="3.5" rx="3.5" id="svg_3" cy="5" cx="5" stroke="#a06405" fill="none"/>
            </g>
          </svg>
          <h2 className="intro__h2">Enjoyable place for all the family</h2>
          <p className="intro__p">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </figcaption>
      </figure>
      <figure className="intro__figure">
        <picture className="intro__picture intro__picture__second">
          <source media="(min-width: 1024px)" srcSet={ require("../images/desktop/pan-fried-shrimp-desktop.jpg") } />
          <source media="(min-width: 768px)" srcSet={ require("../images/tablet/pan-fried-shrimp-tablet.jpg") } />
          <img 
            className="intro__image intro__image-bottom"
            src={ require("../images/mobile/pan-fried-shrimp-mobile.jpg") } 
            alt="Pan Fired Shrimp" 
          />
        </picture>
        <figcaption className="intro__figcation">
          <svg width="73" height="10" xmlns="http://www.w3.org/2000/svg">
            <g>
            <title>Layer 1</title>
            <path stroke="#a06405" id="svg_1" d="m15,5l57,0" opacity="undefined" strokeLinecap="undefined" strokeLinejoin="undefined" fill="none"/>
            <ellipse ry="3.5" rx="3.5" id="svg_3" cy="5" cx="5" stroke="#a06405" fill="none"/>
            </g>
          </svg>
          <h2 className="intro__h2">The most locally sourced food</h2>
          <p className="intro__p">All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default IntroCard