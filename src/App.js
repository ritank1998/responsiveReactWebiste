import Contact from "./components/Contact"
import "./components/Navbar"
import Navbar from "./components/Navbar"
import {Routes , Route} from "react-router-dom"
import Services from "./components/Services"
import About from "./components/About"
import Login from "./components/Login"
import Footer from "./Footer"
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/home" element={<Navbar />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
       <Footer />
    </>
  )
}
export default App