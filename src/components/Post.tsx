import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"


type PostProps = {
    title: string
    avatarColor: string
    postDate: string
    imgUrl: string
}

export const Post = ({title, avatarColor, postDate, imgUrl}: PostProps) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatarColor }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={postDate}
      />
      <CardMedia
        component="img"
        height="20%"
        image={imgUrl}
        alt="Jumping Person"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
}