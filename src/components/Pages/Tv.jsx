import React from 'react'
import Description from '../Description'
import Footer from '../Footer'
import TvShows from '../TvShows'
import { getTvShows } from '../../API/getMovies';
// the main page of Tv Shows that contain the description and the movies
const Tv = () => {
    return (<>
        <Description  Shows={true}  Tv={false}/>
        <TvShows getShows={getTvShows}   />
        <Footer />
    </>
    )
}

export default Tv