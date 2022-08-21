import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Description = () => {
    const [Shows, setShows] = useState(true)
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
              <Button variant={Shows?"contained":"outlined"} onClick={()=>{setShows(true)}}> <Link  to='/TvShows'>TV Shows 2022</Link> </Button>
              <Button variant={Shows?"outlined":"contained"}onClick={()=>{setShows(false)}}><Link  to='/movies'>MOVIES 2022</Link> </Button>
            </Stack>
          </Container>
        </Box>
  )
}

export default Description