// import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Home, Person2} from "@mui/icons-material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {

    const navigationItems = [{
      title: "Home",
      icon: <Home />
    },
    {
      title: "People",
      icon: <Person2 />
    },
    // {
    //   title: "Profile",
    //   icon: <AccountBox />
    // },
  ]

  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event:any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


    return <div className="fixed lg:w-[150px] lg:pt-[70px] min-w-[55px] 
    w-full bottom-0 bg-slate-50 lg:h-full h-[50px] z-10 text-slate-700 lg:flex-col flex ">
     
    {navigationItems.map((item:any, index:number) => (
      
      <div onClick={()=> navigate(`/${item.title.toLowerCase()}`)} key={index} className="flex justify-center gap-2 py-3 cursor-pointer hover:bg-slate-300 items-center lg:flex-none  flex-1">
        {item.icon}
        {!isMobile &&  <span>{item.title}</span> } 
      </div>
      
    ))}
          
    </div>
}