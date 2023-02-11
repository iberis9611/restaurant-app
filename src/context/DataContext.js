import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/posts';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        attendance: '',
        total: 0,
        courseIds: '',
        reservationNumber: '',
        createAt: '',
        updateAt: '',
        id: 0
    });

    const fetchCourses = async () => {
        await api.get(`/courses`)
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    };

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <DataContext.Provider value={{
            courses, setCourses, 
            selectedIds, setSelectedIds,
            selectedCourse, setSelectedCourse, 
            total, setTotal,
            order, setOrder,
            navigate
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;