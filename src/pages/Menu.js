import { useContext } from "react";
import DataContext from "../context/DataContext";

const Menu = () => {
  const { courses, selectedCourse, setSelectedCourse, selectedIds, setSelectedIds, setTotal } = useContext(DataContext);

  const handleSelect = (id, price) => {
    const card = document.querySelector(`#course_${id}`);
    if (!card.classList.contains('selectedCouse')) {
        card.classList.add('selectedCouse');
        setSelectedIds([...selectedIds, id]);
        // use the previous state to set the new state
        setTotal(prevState => prevState + price);
        setSelectedCourse([...selectedCourse, courses.find(course => course.id === id)]);
    } else {
        card.classList.remove('selectedCouse');
        setSelectedIds(selectedIds.filter(s => s !== id));
        setTotal(prevState => prevState - price);
        setSelectedCourse(selectedCourse.filter(course => course.id !== id));
    }
  }

  return (
    <div className="menu">
      <ul className="menu__ul">
        {courses.map(course => (
          <li className="menu__li" key={course.id}>
            <figure className="course">
              <img 
                  className="course__image" 
                  id={`course_${course.id}`}
                  src={require("../images/gelleria/thumbnail.jpg")}
                  alt={course.name}
                  onClick={() => handleSelect(course.id, parseFloat(course.price))}
              />
              <figcaption className="course__figcaption">
                  <section className="course__section">
                  <h2 className="course__h2">{course.name}</h2>
                  <p className="course__p">{course.intro}</p>
                  </section>
                  <p className="course__p price">${course.price}</p>
              </figcaption>
            </figure>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu