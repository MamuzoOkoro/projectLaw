import {Outlet} from 'react-router-dom'
import Header from '../static/Header'

const Layout = () => {
  return (
    <div className='relative'>
      <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout