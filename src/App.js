import "./App.scss"
import Featurs from "./components/Featurs/Featurs"
import Header from "./components/Header/Header"
import RealTours from "./components/RealTours/RealTours"
import Sidebar from "./components/SideBar/Sidebar"
import StoryP from "./components/StoryP/StoryP"
import StoryC from "./components/StoryC/StoryC"
import Gallery from "./components/Gallery/Gallery"
import  Footer  from "./components/Footer/Footer"
import Homes from "./components/Homes/Homes"  

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <RealTours />
      <Featurs />
      <StoryP />
      <StoryC />
      <Homes /> 
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
