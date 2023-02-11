import { DataProvider } from './context/DataContext';
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import ErrorPage from './pages/ErrorPage';
import Order from './pages/Order';
import Menu from './pages/Menu';
import Book from './pages/Book';
import Home from './pages/Home'

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<PageLayout />} errorElement={<ErrorPage />}>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/book' element={<Book />}></Route>
          <Route path='/order' element={<Order />}></Route>
        </Route>
      </Routes>
    </DataProvider>
  )
}

export default App