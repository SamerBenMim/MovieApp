import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material'


import React from 'react'
import CircularStatic from './Utils/CircularProgress';
const MyCard = () => {
  return (
    <Grid item key={"card"} xs={12} sm={6} md={4} sx={{ position:"relative"}}>
    <IconButton aria-label="add to favorites" sx={{position:"absolute", right:"0"}}>
    <Checkbox  icon={<FavoriteBorderIcon sx={{ width:'30px',height:"30px"}} />} checkedIcon={<Favorite sx={{color:"red",width:'30px' ,height:"30px"}} />} />
    </IconButton>
<Card
  sx={{ display: 'flex', flexDirection: 'column' }}
>
  <CardMedia 
    component="img"
    sx={{
        // 16:9
        // pt: '56.25%',
      }}
    image="https://source.unsplash.com/random" 
    height="300px"
    alt="random"
  />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography gutterBottom variant="h5" component="h2">
    The Sandman
    </Typography>
    <Typography variant='h6' color="gray" fontSize={14}>
    Aug 02, 2022 ( English )
    </Typography>
  </CardContent>
  <CardActions sx={{justifyContent:"space-between"}}>
    <Button size="small">View</Button>
    <CircularStatic value={87.6}  />

 
  </CardActions>
</Card>
</Grid>
  )
}

export default MyCard