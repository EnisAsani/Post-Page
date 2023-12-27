import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {Mail, Notifications} from "@mui/icons-material"
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    padding: "3px 5px",
    width: "40%",
    height: "25px"
}))

const NavIcons = styled(Box)(() => ({
    // backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    height: "30px",
    cursor:'pointer'
}))

export const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    return <AppBar position="sticky">
        <StyledToolbar>
            <Typography sx={{display: {xs: "none", sm: "block"} }} variant="h6">FIND ME</Typography>
            <VideogameAssetIcon sx={{display: {xs: "block", sm: "none"} }}/>
            <Search><InputBase placeholder="search"/></Search>
            <NavIcons>
                <Badge sx={{display: {xs: "none", sm: "block"} }} badgeContent={4} color="error">
                    <Mail  />
                </Badge>
                <Badge sx={{display: {xs: "none", sm: "block"} }} badgeContent={2} color="error">
                    <Notifications/>
                </Badge>
                <Avatar 
                onClick={()=> setIsProfileOpen(true)}
                alt="enko img" src="/images/CV - Enko.jpg" />
            </NavIcons>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={isProfileOpen}
        onClose={()=> setIsProfileOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
}