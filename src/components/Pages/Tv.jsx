import React from 'react'
import Description from '../Description'
import Footer from '../Footer'
import TvShows from '../TvShows'
import { getTvShows } from '../../API/getMovies';

const Tv = () => {
    return (<>
        <Description  Shows={true}/>
        <TvShows getShows={getTvShows} />
        <Footer />
    </>
    )
}

export default Tv