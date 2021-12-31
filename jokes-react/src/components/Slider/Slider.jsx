import { fabClasses } from "@mui/material";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // do not remove!
import JokeArea from "../JokeArea";


const Slider = (props) => {
    const { jokes } = props;

    return (
        <Carousel
        className="carousel-container"
        showThumbs={false} 
        infiniteLoop={true}
        showIndicators={false}
        
        >
            {jokes.map((joke) => (
                <div>
                    <JokeArea
                    style={{ display: 'inline-flex' }}
                    key={joke.id}
                    date={joke.input}
                    title={'Naslov'}
                    jokeText={joke.joke}/>
                  </div>

            ))
            }
        </Carousel>
    );
}

export default Slider;
