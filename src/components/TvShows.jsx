import { Box, Button, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MyCard from './card';

import React, { useEffect, useState } from 'react'
import Pagination from './Utils/Pagination';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { setShows } from '../Redux/Reducers/showsReducer';
import Loader from './Utils/Loader';
const Main = ({getShows}) => {
    const [movies, setMovies] = useState([]);
    const { searchInput } = useSelector((state) => state.search)
    const { page } = useSelector((state) => state.pagination)
    const { shows } = useSelector((state) => state.TVshows)
    const dispatch = useDispatch();

    useEffect(() => {
        if (shows[page - 1].length != 0) {
            setMovies(shows[page - 1])
        }
        else if ((!movies.length || page != 0)) {
            getShows(page).then(res => { setMovies(res.results); dispatch(setShows(res)); })
        }
    }, [page])
    if(movies.length==0)return<Loader />
    else return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {movies.filter(movie => movie.name.toLowerCase().includes(searchInput.toLowerCase())).map((movie, index) => { if (index < 18) return <MyCard key={index} name={movie.name} date={movie.first_air_date} original_language={movie.original_language} vote_average={10 * movie.vote_average} img={movie.backdrop_path} /> })}
            </Grid>
            <Pagination count={10} ></Pagination>
        </Container>
    )
}

export default Main