
import './App.css'
import Careers from './Website/career/Careers'
import ContactUS from './Website/contactUs/ContactUs'
import Footer from './Website/Footer/Footer'
import Intro from './Website/intro/Intro'
import IntroPart2 from './Website/introPart2/IntroPArt2'
import NavBar from './Website/navbar/NavBar'
import AboutServices from './Website/services/aboutServices/AboutServices'
import Services from './Website/services/Services'

function App() {


  return (
   <div>
   <NavBar/>
   <Intro/>
   <IntroPart2/>
   <Services/>
   <AboutServices/>
   <Careers/>
   <ContactUS/>
   <Footer/>
   </div>
  )
}

export default App
