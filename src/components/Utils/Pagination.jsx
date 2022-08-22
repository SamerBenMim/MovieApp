import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux/es/exports';
import {setPage} from '../../Redux/Reducers/paginationReducer';
const Pagination_ = ({count}) => {
  const dispatch = useDispatch();
  return (
<Pagination onChange={(e,p)=>{dispatch(setPage(p))}} count={count} color="primary"  sx={{display:"flex",justifyContent:"center",mt:"50px"}} />  )
}

export default Pagination_