import { Rightbar } from "./components/Rightbar"
import { Sidebar } from "./components/Sidebar"
import { Feed } from "./components/Feed"
import { Navbar } from "./components/Navbar"
import { Box } from "@mui/material"
import Stack from '@mui/material/Stack';


function App() {



  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={1}>
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
