import { Opacity } from '@mui/icons-material'
import { Container } from '@mui/material'
import React from 'react'
import Description from '../Description'
import { Box, Button, CardActions, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import BasicRating from '../Utils/rating'
import ControlledAccordions from '../Utils/accordion'
import {useLocation} from 'react-router-dom'
const Movies = () => {
  const location = useLocation() 
  
  




  return (
    <>
      <Box sx={{ padding: { xs: "10px", sm: "10px" ,md:"50px"}, color: "white", opacity: '.9', backgroundColor: '#2e2e41', display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
        <Box sx={{ display: "flex",  alignItems: "center", justifyContent: "center" }} >
          <img src="https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg " alt="img" style={{ width: "250px", height: "350px", borderRadius: "12px" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width:{ xs: "90%", sm: "90%" ,md:"70%"}, flexDirection: "column", marginTop:"10px",alignItems: { xs: "center", sm: "center" ,md:"start"}}} >
          <Box sx={{ display: "flex", alignItems: "center",flexDirection: { xs: "column", sm: "colunm", md: "row" }    }}>
            <Typography variant="h5" component="h2" fontSize={28}  sx={{textAlign:{xs:"center",sm:"center",md:"unset"}}} >
              The Lion King
            </Typography>
            <Typography variant="h6" component="h6" fontSize={17} ml={2}>
              (2022)
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row" }  ,textAlign: { xs: "center", sm: "center" }}}>
            <Typography variant="p" fontSize={17} >
              2022-07-05 (en)
            </Typography>
            <Typography variant="p" fontSize={17} ml={3} >
              Comedy, Action & Adventure, Sci-Fi & Fantasy
            </Typography>
          </Box>
          <br />
          <BasicRating rating={2.5}></BasicRating>
          <br />

          <Typography variant="h5" component="h5" fontSize={22}  >
            Overview
          </Typography>
          <Typography variant="body2" component="p" sx={{textAlign:{xs:"center",sm:"center",md:"unset"}}}>
            Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.
          </Typography>
          <br />
          <Typography variant="h5" component="h5" fontSize={22} >
            Creator
          </Typography>
          <Typography variant="body2" component="p" >
            Jennifer
          </Typography>
        </Box>
      </Box>
      
      <Container sx={{mt:5,mb:10}}>
        <ControlledAccordions />
      </Container>
    </>
  )
}

export default Movies