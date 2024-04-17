import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-28 pb-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
