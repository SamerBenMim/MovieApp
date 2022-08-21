import { Box, Button, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MyCard from './card';

import React, { useEffect, useState } from 'react'
import Pagination from './Utils/Pagination';
import { getMovies } from '../API/getMovies';
import { useSelector } from 'react-redux';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const { searchInput } = useSelector((state) => state.search)
    useEffect(() => {
        if (movies.length == 0) {
            getMovies(2).then(res => { setMovies(res) })
        }
    }, [])

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>

                {movies.filter(movie=> movie.name.includes(searchInput)).map((movie, index) => { if (index < 18) return <MyCard key={index} name={movie.name} date={movie.first_air_date} original_language={movie.original_language} vote_average={10 * movie.vote_average} img={movie.backdrop_path} /> })}

            </Grid>
            <Pagination count={10}></Pagination>

        </Container>
    )
}

export default Main