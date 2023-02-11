import Button from "./Button"

const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <h3 className="homeHeader__h3">dine</h3>
      <h4 className="homeHeader__h4">Exquisite dining<br />since 1989</h4>
      <p className="homeHeader__p">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
      <Button buttonText="BOOK A TABLE" />
    </header>
  )
}

export default HomeHeader