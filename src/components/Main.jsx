import { Box, Button, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material'
import MyCard from './card';

import React from 'react'
import CircularStatic from './Utils/CircularProgress';
import Pagination from './Utils/Pagination';

const Main = () => {
  return (
<Container sx={{ py: 8 }} maxWidth="md">
 <Grid container spacing={4}>
  {/* {cards.map((card) => ( */}
    <MyCard/>
    <MyCard/>
    <MyCard/>
    
  
  {/* } */}
 </Grid>
 <Pagination cout={10}></Pagination>

</Container>
  )
}

export default Main