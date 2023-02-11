const DatePicker = ({ pickedYear, setPickedYear, pickedMonth, setPickedMonth, pickedDay, setPickedDay, dayCount, today }) => {
    let years = []
    const currentYear = today.getFullYear()
    for (let i = 0; i < 5; i++) {
        const year = currentYear + i;
        years.push(year.toString());
    }
    const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

    let days = [];
    for (let i = 1; i <= dayCount; i++) {
        if (i < 10) {
            i = '0' + i
        }
        days.push(i + '')
    }

  return (
    <div className='picker'>
        <label className="picker__label">Pick a date</label>
        <div className="picker__div">
            <select 
                className="picker__select"
                onChange={(e) => setPickedMonth(e.target.value)}
                disabled={pickedYear ? false : true}
                required
                value={pickedMonth}
            >
                <option className="picker__option" value="">MM</option>
                {months.map(month => (
                    <option key={month} className="picker__option" value={month}>{month}</option>
                ))}
            </select>
            <select 
                className="picker__select"
                disabled={pickedMonth ? false : true}
                onChange={(e) => setPickedDay(e.target.value)}
                required
                value={pickedDay}
            >
                <option className="picker__option" value="">DD</option>
                {days.map(day => (
                    <option key={day} className="picker__option" value={day}>{day}</option>
                ))}
            </select>
            <select 
                className="picker__select"
                onChange={(e) => setPickedYear(e.target.value)}
                required
                value={pickedYear}
            >
                <option className="picker__option" value="">YYYY</option>
                {years.map(year => (
                    <option key={year} className="picker__option" value={year}>{year}</option>
                ))}
            </select>
        </div>
    </div>
  )
} 

export default DatePicker