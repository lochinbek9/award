import './App.css'

import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
// import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navigation />
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App
