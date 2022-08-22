import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// these 2 props to distinguish between movies and tv shows
const Description = ({ Shows, Tv }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          TV Shows & Movies
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          There is a lot of TV shows and movies that you can discover on our website.
          Here is a list of the most popular TV shows and movies.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Link to='/TvShows'><Button variant={Tv ? "outlined" : "contained"}> TV Shows 2022</Button></Link>
          <Link to='/movies'><Button variant={Shows ? "outlined" : "contained"}>MOVIES 2022</Button> </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Description