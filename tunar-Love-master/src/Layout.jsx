import { Outlet } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
