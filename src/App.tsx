import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Box } from "@mui/material"
import { Modal } from "./components/Modal"
import { ImageSlider } from "./components/ImageSlider"
import {images} from "./data/images"
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { useModalContext } from "./context/modalContext"
import { People } from "./pages/People"
// import { Profile } from "./pages/Profile"

function App() {

  const {activeModal} = useModalContext()

  return (
    <Box>
      <Navbar className="relative">
       {activeModal && <Modal>
        <ImageSlider 
       images={images}/>
       </Modal> }
        </Navbar>
      <Sidebar />

        <Routes >
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<People />}/>
          {/* <Route path="/profile" element={<Profile />}/> */}
        </Routes>
      
    </Box>
  )
}

export default App
