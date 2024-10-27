import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/*
const images = [
    "./images/dti_1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];
*/

function PictureCarousel({ images }) {
    return (
        <div className="box">
            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                </div>
                ))}
            </Carousel>
        </div>
    );
}

export default PictureCarousel;