import { Box } from "@mui/material"
import { Post } from "./Post";

export const Feed = () => {


    return <Box sx={{padding:'10px 30px', flex:'1 1 60%'}}  p={2} >
        <Post title="John Doe" 
        avatarColor="orangered" 
        postDate="14 Jan 2015"
        imgUrl="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Post title="Enko Asani" 
        avatarColor="blue" 
        postDate="22 Feb 2020"
        imgUrl="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Post title="Tomce Micak" 
        avatarColor="green" 
        postDate="04 Dec 2019"
        imgUrl="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Post title="Arlind Manush" 
        avatarColor="purple" 
        postDate="11 Nov 2018"
        imgUrl="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
    </Box>
}