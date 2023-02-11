import { FaMinusCircle } from 'react-icons/fa'
import { useContext, useState, useMemo } from "react";
import DataContext from "../context/DataContext";
import api from '../api/posts';
import TimePicker from '../components/TimePicker';
import DatePicker from '../components/DatePicker';

const Book = () => {
  const { selectedCourse, setSelectedCourse, total, setTotal, selectedIds, setSelectedIds, order, setOrder, navigate } = useContext(DataContext);
  const { reservationNumber, createAt, updateAt, id, date, time } = order
  const dateArray = date.split('/');
  const timeArray = time.split(':');
  
  const [name, setName] = useState(order.name); // Use controlled component to prepopulate the form
  const [phone, setPhone] = useState(order.phone);
  const [attendance, setAttendance] = useState(order.attendance);
  const [pickedYear, setPickedYear] = useState(dateArray[2]);
  const [pickedMonth, setPickedMonth] = useState(dateArray[0]);
  const [pickedDay, setPickedDay] = useState(dateArray[1]);
  const [pickedHour, setPickedHour] = useState(timeArray[0])
  const [pickedMinute, setPickedMinute] = useState(timeArray[1])
  const [pickedZone, setPickedZone] = useState(timeArray[2])

  const today = new Date();
  const getDays = (year, month) => {
      return new Date(year, month, 0).getDate();
  }
  let dayCount;
  if (pickedYear&&pickedMonth) {
    dayCount = getDays(pickedYear, pickedMonth) // Fetch the number of days in the given month and year
  }

  const isWeekend = (date) => {
    const newDate = new Date(date);
    return newDate.getDay() === 6 || newDate.getDay() === 0;
  }

  const pickedDate = useMemo(() => {
    return `${pickedYear}-${pickedMonth}-${pickedDay}`
  }, [pickedYear, pickedMonth, pickedDay]);
  const pickedTime = useMemo(() => {
    return `${pickedHour}:${pickedMinute}:${pickedZone}`
  },[pickedHour, pickedMinute, pickedZone]);

  let checkWeekend = isWeekend(pickedDate);

  const removeSelectedCourse = (id, price) => {
    setSelectedCourse(selectedCourse.filter(course => course.id !== id));
    setSelectedIds(selectedIds.filter(i => i !== id));
    setTotal(prevState => prevState - price);
  }
  const addOrder = async () => {
    const reservationNumber = String(Math.floor(Math.random() * 100 +1));
    const courseIds = selectedIds.join();
    await api.post(`/orders`, { 
      name,
      phone,
      date: pickedDate,
      time: pickedTime,
      attendance,
      total,
      courseIds: courseIds,
      reservationNumber,
      createAt: today.toISOString(),
      updateAt
    })
    .then(res => {
      const data = res.data;
      setOrder({...data});
      navigate(`/order`);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const updateOrder = async (id) => {
      const courseIds = selectedIds.join();
      await api.put(`/orders/${id}`, { 
        name, 
        phone, 
        date: pickedDate,
        time: pickedTime,
        attendance, 
        total, 
        courseIds: courseIds,
        reservationNumber,
        createAt,
        updateAt: today.toISOString(),
      })
      .then(res => {
        const data = res.data;
        setOrder({...data});
        navigate('/order');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleSubmit = (e) => { // handleSubmit's event is implicitly passed
    e.preventDefault(e);
    if (reservationNumber === '') {
      addOrder();
    } else {
      updateOrder(id);
    }
  }

  return (
    <div className='flex'>
      <form 
            className='form'
            onSubmit={handleSubmit}
        >
          {selectedIds.length > 0 ? 
            <fieldset className='form__fieldset'>
              <legend className='form__legend'>Food Selected</legend>
              {selectedCourse.map(course => (
                <p className='checkbox' key={course.id}>
                  <input 
                    className='offscreen' 
                    type="checkbox" 
                    name={course.name}
                    id={course.id} 
                    value={course.name}
                  />
                  <label htmlFor={course.name}>{course.name} {course.price}</label>
                  <FaMinusCircle 
                    role="button" 
                    tabIndex="0" 
                    onClick={() => removeSelectedCourse(course.id, parseFloat(course.price))}
                  />
                </p>
              ))}
              <p>Total: ${total}</p>
            </fieldset>
          : ''}
            <fieldset className='form__fieldset'>
            <legend className='offscreen'>Reservation Info</legend>
            <p className='form__p'>
              {/* exgre: letter less than 20 */}
              <label htmlFor='name' className='offscreen'>Name</label>
              <input 
                className='form__input'
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                value={name}
                autoComplete='on'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            
            {/* exgre:+1 xxx xxx xxxx */}
            <p className='form__p'>
              <label htmlFor='phone' className='offscreen'>Phone Number</label>
              <input 
                className='form__input'
                type='text'
                name='phone'
                id='phone'
                placeholder='Phone Number'
                autoComplete='on'
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <DatePicker
              setPickedYear={setPickedYear}
              pickedYear={pickedYear}
              setPickedMonth={setPickedMonth}
              pickedMonth={pickedMonth}
              setPickedDay={setPickedDay}
              pickedDay={pickedDay}
              dayCount={dayCount}
              today={today}
            />
            <TimePicker 
              setPickedHour={setPickedHour}
              pickedHour={pickedHour}
              setPickedMinute={setPickedMinute}
              pickedMinute={pickedHour}
              setPickedZone={setPickedZone}
              pickedZone={pickedZone}
              pickedDay={pickedDay}
              checkWeekend={checkWeekend}
            />
            <p className='form__p'>
              <label htmlFor="attendance" className='offscreen'>Attendance</label>
              <select 
                className='form__select'
                name="attendance" 
                id="attendance"
                placeholder="Q"
                required
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
              >
                <option value="" disabled>Attendance</option>
                <option value="1">1 people</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>
            </p>
            </fieldset>
            <button className='form__button__submit' type="submit">MAKE RESERVATION</button>
            <button className='form__button__submit' type="button" onClick={() => navigate('/menu')}>BACK TO MENU</button>
        </form>
    </div>
  )
}

export default Book