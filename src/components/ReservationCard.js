import Button from "./Button"

const ReservationCard = () => {
  return (
    <section className='reservation'>
      <h2 className="offscreen">Reservation invitation</h2>
        <article className='reservation__article'>
            <h2 className="reservation__h2">Ready to make a reservation?</h2>
            <Button buttonText={'BOOK A TABLE'} />
        </article>
    </section>
  )
}

export default ReservationCard