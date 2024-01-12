import { Feed } from "../components/Feed"
// import { Rightbar } from "../components/Rightbar"

const Home = () => {
    
  return (
    // <Stack sx={{display:'flex', flexDirection:{xs:'column', md:'row'},justifyContent:"space-between", gap:"10px"}} >
    // <Feed />
    // <Rightbar />
    // </Stack>
    <div className="lg:pl-[150px] min-h-screen flex w-[80%] lg-w-[70%]">
         <Feed />
         {/* <Rightbar /> */}
    </div>
  )
}


// handleModalOpen={(index:number)=> {
//     setActiveModal(true)
//     setSelectedImageIndex(index)
//     }}

export {Home}
