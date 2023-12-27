import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, Typography, List, Divider } from "@mui/material"
import React from "react"

export const Rightbar = () => {
    return <Box flex={2} 
    p={2} 
    sx={{display: {xs: "none", sm: "block"} }} >
    <Box position="fixed" padding="0 20px 0 0">
        <Typography variant="h6" fontWeight={300}>
            Online Friends</Typography>
            <AvatarGroup max={4} sx={{display: "flex", 
            padding: "10px 0",
            justifyContent: "start", alignItems: "center"}}>
                <Avatar sx={{cursor:'pointer'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar sx={{cursor:'pointer'}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar sx={{cursor:'pointer'}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar sx={{cursor:'pointer'}} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar sx={{cursor:'pointer'}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={300} padding="0 0 10px 0">
            Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100}>
                <ImageListItem>
                <img style={{cursor:'pointer'}}
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="photo"
            loading="lazy"
                />
            </ImageListItem>
            <ImageListItem>
                <img style={{cursor:'pointer'}}
            src="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="photo"
            loading="lazy"
                />
            </ImageListItem>
            <ImageListItem>
                <img style={{cursor:'pointer'}}
            src="https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="photo"
            loading="lazy"
                />
            </ImageListItem>
            </ImageList>
            <Typography padding="10px 0" variant="h6" fontWeight={300}>
            Latest Conversations</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',
         overflowY: "scroll", height: "300px"}}>
      <ListItem alignItems="flex-start" sx={{cursor:'pointer'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{cursor:'pointer'}}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{cursor:'pointer'}}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{cursor:'pointer'}}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
    </Box>
    </Box>
}