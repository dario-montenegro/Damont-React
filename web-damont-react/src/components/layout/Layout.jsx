import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
import Hero from '../common/Hero'
import Nav from '../common/Nav'

function Layout() {
  return (
    <>
      <Hero />
      <Nav />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout