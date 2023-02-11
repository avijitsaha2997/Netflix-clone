import React from 'react'
import Banner from '../Banner';
import "./HomeScreen.css"
import Nav from '../Nav';
import requests from '../Request';
import Row from '../Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="TOP RATED"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="COMEDY MOVIES"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="DOCUMENTARIES"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen;