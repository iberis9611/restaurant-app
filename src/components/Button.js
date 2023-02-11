import { useContext } from "react";
import DataContext from "../context/DataContext";

const Button = ({ buttonText }) => {
  const { navigate } = useContext(DataContext);

  const handleClick = () => {
    if (buttonText === 'BOOK A TABLE') {
      navigate('/book')
    } else {
      navigate('/menu')
    }
  }

  return (
    <button 
      className='button'
      type="button"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}

export default Button