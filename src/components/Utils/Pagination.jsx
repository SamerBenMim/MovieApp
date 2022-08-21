import React from 'react'
import Pagination from '@mui/material/Pagination';

const Pagination_ = ({count}) => {
  return (
<Pagination  count={count} color="primary"  sx={{display:"flex",justifyContent:"center",mt:"50px"}} />  )
}

export default Pagination_