const TimePicker = ({ checkWeekend, pickedDay, pickedHour, setPickedHour, pickedMinute, setPickedMinute, pickedZone, setPickedZone  }) => {
    
    // const minutes = ['00','10','20','30','40','50']
    let hours = [];
    let minutes = [];

    if (!checkWeekend) {
        if (pickedZone === 'AM') {
            hours = ['09','10','11'];
        } else {
            hours= ['12','01','02','03','04','05','06','07','08','09']
            if (pickedHour === '09') {
                minutes = ['00']
            } else {
                minutes = ['00','10','20','30','40','50']
            }
        }
    } else {
        if (pickedZone === 'AM') {
            hours = ['09','10','11'];
        } else {
            hours= ['12','01','02','03','04','05','06','07','08','09','10'];
            if (pickedHour === '10') {
                minutes = ['00','10','20','30']
            } else {
                minutes = ['00','10','20','30','40','50']
            }
        }
    }

    return (
        <div className="picker">
            <label className="picker__label">Pick a time</label>
            <div className="picker__div">
                <select 
                    className="picker__select"
                    onChange={(e) => setPickedHour(e.target.value)}
                    required
                    value={pickedHour}
                    disabled={pickedZone ? false : true}
                >
                    {hours.map(hour => (
                    <option 
                        className="picker__option" 
                        key={hour}
                        value={hour}
                    >
                        {hour}
                    </option>
                    ))}
                </select>
                <select 
                    className="picker__select"
                    onChange={(e) => setPickedMinute(e.target.value)}
                    required
                    value={pickedMinute}
                    disabled={pickedHour ? false : true}
                >
                    {minutes.map(minute => (
                    <option 
                        key={minute}
                        className="picker__option" 
                        value={minute}
                    >
                        {minute}
                    </option>
                    ))}
                </select>
                <select 
                    className="picker__select"
                    onChange={(e) => setPickedZone(e.target.value)}
                    required
                    value={pickedZone}
                    disabled={pickedDay ? false : true}
                >
                    <option className="picker__option" value="AM">AM</option>
                    <option className="picker__option" value="PM">PM</option>
                </select>
            </div>
        </div>
    )
} 

export default TimePicker