import { Box, Button, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material'
import MyCard from './card';

import React, { useEffect, useState } from 'react'
import CircularStatic from './Utils/CircularProgress';
import Pagination from './Utils/Pagination';
import { getMovies } from '../API/getMovies';

const Main = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        if(movies.length==0){
            getMovies(1).then(res => {setMovies(res)})
           
        }
    }, [])
    
  return (
<Container sx={{ py: 8 }} maxWidth="md">
 <Grid container spacing={4}>
  {/* {cards.map((card) => ( */}
    
  { movies.map((movie,index) => { if(index<18)return <MyCard name={movie.name} date={movie.first_air_date} original_language={movie.original_language} vote_average={10*movie.vote_average} key={index}/>})}

    
  
  {/* } */}
 </Grid>
 <Pagination cout={10}></Pagination>

</Container>
  )
}

export default Main