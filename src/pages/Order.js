import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from '../api/posts';

const Order = () => {

  const { selectedIds, setSelectedIds, selectedCourse, setSelectedCourse, order, setOrder, navigate, total, setTotal } = useContext(DataContext);
  const { name, phone, date, time, attendance, reservationNumber, id } = order;
  const timeArr = time.split(':');
  const dateArr = date.split('-');

  const cancelOrder = async (id) => {
    if(window.confirm("Are you you want to cancel?")) {
      await api.delete(`/orders/${id}`)
        .then(res => {
          setOrder({
            ...order,
            name: '',
            phone: '',
            datetime: '',
            attendance: '',
            total: 0,
            courseIds: '',
            id: 0,
            reservationNumber: '',
            createAt: '',
            updateAt: ''
          });
          setSelectedCourse([])
          setSelectedIds([])
          setTotal(0)
          navigate('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <div className="order">
      <p className="order__p">Congrats, {name}! <br /> You booked a table for {attendance} people <br /> at {timeArr[0]}:{timeArr[1]} {timeArr[2]} on {dateArr[1]}/{dateArr[2]}/{dateArr[0]} <br />under {phone}.</p>
      <h1 className="order__h2">
        Reservation Number:<br />
        <span className="order__number">{reservationNumber}</span>
      </h1>
      {selectedIds.length > 0 ? 
      <div className="order__div order__div__course">
        <h3 className="order__h3">Here are the courses you've selected:</h3>
        {selectedCourse.map(course => (
          <p className="order__p" key={course.id}>{course.name} ${course.price}</p>
        ))}
        total: ${total}
      </div>
      : ''}
      <div className="order__div order__div__button">
        <button type="button" onClick={() => navigate('/book')}>EDIT RESERVATION</button>
        <button type="button" onClick={() => cancelOrder(id)}>CANCEL RESERVATION</button>
      </div>
    </div>
  )
}

export default Order