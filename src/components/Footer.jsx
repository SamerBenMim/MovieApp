import { Copyright } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Pagination from './Utils/Pagination'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom color="text.primary">
        Welcome
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Copyright © 2022 all rights reserved - BEN MIM Samer
      </Typography>
    </Box>
  )
}

export default Footer