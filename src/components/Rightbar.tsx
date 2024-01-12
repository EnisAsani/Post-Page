import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, Typography, List, Divider } from "@mui/material"
import React from "react"
import {images} from "../data/images"
import { useModalContext } from "../context/modalContext"

export const Rightbar = () => {

  const {handleActiveteModal} = useModalContext()


    return <Box flex={2} 
    p={2}
    sx={{display: 'flex' ,minHeight:'90vh', flexDirection:{md:'row', xs:'column'}, paddingBottom:'100px'}}
     >
    <Box sx={{flex:'1',}}>
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
            
            <Typography padding="10px 0" variant="h6" fontWeight={300}>
            Latest Conversations</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper',
         overflowY: "auto", minHeight: "300px"}}>
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
    <Box sx={{flex:'1'}}>
    <Typography variant="h6" fontWeight={300} padding="0 0 10px 0">
            Latest Photos</Typography>
            <div>
            <ImageList sx={{display:'flex', flexWrap:'wrap'}} >
              {images.map((img:any, index:number) => (
                <ImageListItem sx={{flex:'1 1 200px',}} key={index}>
                <img onClick={()=> handleActiveteModal(index)} style={{cursor:'pointer',height:"150px"}}
            src={img.imgUrl}
            alt="photo"
            loading="lazy"
                />
            </ImageListItem>
              )
              )}
                
            </ImageList>
            </div>
    </Box>
    </Box>
}