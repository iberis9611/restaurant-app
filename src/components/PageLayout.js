import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const PageLayout = () => {
  return (
    <div className='pageLayout'>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PageLayout