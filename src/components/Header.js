import { Link } from "react-router-dom"

const Header = () => {

  return (   
    <header className="header">
        <nav className="header__nav">
          <a href='/' className='header__nav__a'>dine</a>
          <button className="header__nav__button" >
            <Link to={'/book'}>BOOK A TABLE</Link>
          </button>
        </nav>
    </header>
  )
}

export default Header