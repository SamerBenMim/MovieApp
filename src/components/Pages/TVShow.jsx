import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import BasicRating from '../Utils/rating'
import ControlledAccordions from '../Utils/accordion'
import { useLocation } from 'react-router-dom'
import { getTvShowById } from '../../API/getMovies'
import Loader from '../Utils/Loader';

//this is the component that shows the details of a movie/tvShow
const Movies = () => {
  const [show, setshow] = useState(null)
  const location = useLocation()
  const [epsiodes, setEpisodes] = useState([])

  useEffect(() => {

    getTvShowById(location.state.id).then(res => {
      setshow(res)
      const episodes = []
      for (let i = 1; i <= res.number_of_seasons; i = i + 1) {
        episodes.push(res['season/' + i])
      }
      setEpisodes(episodes);

    })
  }, [])
  if (!show) return <Loader />
  else return (
    <>
      <Box sx={{ padding: { xs: "10px", sm: "10px", md: "50px" }, color: "white", opacity: '.9', backgroundColor: '#121212', display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
          <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt="img" style={{ width: "250px", height: "350px", borderRadius: "12px" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: { xs: "90%", sm: "90%", md: "70%" }, flexDirection: "column", marginTop: "10px", alignItems: { xs: "center", sm: "center", md: "start" } }} >
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "colunm", md: "row" } }}>
            <Typography variant="h5" component="h2" fontSize={28} sx={{ textAlign: { xs: "center", sm: "center", md: "unset" } }} >
              {show.name}
            </Typography>
            <Typography variant="h6" component="h6" fontSize={17} ml={2}>
              (2022)
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row" }, textAlign: { xs: "center", sm: "center" } }}>
            <Typography variant="p" fontSize={17} >
              2022-07-05 ({show.original_language})
            </Typography>
            <Typography variant="p" fontSize={17} ml={3} >
              {show.genres.map(genre => genre.name + " & ")}
            </Typography>
          </Box>
          <br />
          <BasicRating rating={show.vote_average / 2}></BasicRating>
          <br />

          <Typography variant="h5" component="h5" fontSize={22}  >
            Overview
          </Typography>
          <Typography variant="body2" component="p" sx={{ textAlign: { xs: "center", sm: "center", md: "unset" } }}>
            {show.overview}
          </Typography>
          <br />
          <Typography variant="h5" component="h5" fontSize={22} >
            Creator
          </Typography>
          <Typography variant="body2" component="p" >
            {(show.created_by.length != 0) && (show.created_by[0].name) || "not mentionned"}
          </Typography>
        </Box>
      </Box>

      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography>
          {show.number_of_seasons > 1 ? ("Number of Seasons : " + show.number_of_seasons ) : "Season : 1"}
        </Typography>
        <Typography>
          {show.number_of_episodes > 1 ? ("Total episodes : " + show.number_of_episodes) : " Episode"}
        </Typography>
        <br />
        <ControlledAccordions epsiodes={epsiodes} />
      </Container>
    </>
  )
}

export default Movies