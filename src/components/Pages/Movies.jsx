import React from 'react'
import Description from '../Description'
import Footer from '../Footer'
import Movies from '../Movies'
import { getMovies } from '../../API/getMovies';
// the main page that contain the description and the movies
const MoviesPage = () => {
  return (
    <>
      <Description  Shows={false}  Tv={true} />
      <Movies  getShows={getMovies}/>
      <Footer />
    </>
  )
}

export default MoviesPage