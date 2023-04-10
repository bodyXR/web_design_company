import bg from "./assets/section1_bg.png"

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
      <img className="bg" src={bg}alt="" />

    </>
  )
}

export default App