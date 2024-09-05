import React from 'react'
import Carousel from "react-multi-carousel";

const MovieSlide = ({ popularMovies, topRatedMovies, upcomingMovies }) => {

    const backgroundImageUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${popularMovies[0]?.backdrop_path}`;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
    <div>
        <div >
            <h1>Popular Movie</h1>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
        </div>
        <div>
            <h1>Top rated Movie</h1>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
        </div>
        <div>
            <h1>Upcoming Movie</h1>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
        </div>
    </div>
    )
}

export default MovieSlide