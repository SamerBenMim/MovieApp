import {  Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Favorite } from '@mui/icons-material'
import PropTypes from 'prop-types';

import React from 'react'
import CircularStatic from './Utils/CircularProgress';
import { Link } from 'react-router-dom';
const MyCard = ({ name, date, original_language, vote_average, img, id }) => {
  return (
    <Grid item key={"card"} xs={12} sm={6} md={4} sx={{ position: "relative" }}>
      <IconButton aria-label="add to favorites" sx={{ position: "absolute", right: "0" }}>
        <Checkbox icon={<FavoriteBorderIcon sx={{ width: '30px', height: "30px" }} />} checkedIcon={<Favorite sx={{ color: "red", width: '30px', height: "30px" }} />} />
      </IconButton>
      <Card
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original${img} `}
          height="300px"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1, height: "70px" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant='h6' color="gray" fontSize={14}>
            {date} ( {(original_language == "en") ? "english" : "frensh"} )
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", cursor: "pointer" }}>
          <Link to="/TVShow" state={{ id }}>
            <Button size="small">View</Button>
          </Link>
          <CircularStatic value={vote_average} />
        </CardActions>
      </Card>
    </Grid >
  )
}
MyCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  original_language: PropTypes.string,
  vote_average: PropTypes.number,
  img: PropTypes.string,
  id: PropTypes.string
}


export default MyCard