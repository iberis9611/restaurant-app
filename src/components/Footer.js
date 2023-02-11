const Footer = () => {
  return (
    <footer className="footer">
        <h2 className="footer__h2">dine</h2>
        <address className="footer__address">
          <p>MARTHWAITE, SEDBERGH</p>
          <p>CUMBRIA</p>
          <a href="tel:00111234567">+ 00 11 123 4567</a>
        </address>
        <article className="footer__article">
          <h3>OPEN TIMES</h3>
          <dl>
            <dt>MON - FRI:</dt>
            <dd>09:00 AM - 10:00 PM</dd>
          </dl>
          <dl>
            <dt>SAT - SUN:</dt>
            <dd>09:00 AM - 11:30 PM</dd>
          </dl>
        </article>
    </footer>
  )
}

export default Footer