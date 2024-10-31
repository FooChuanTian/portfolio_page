import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
/*
const images = [
    "./images/dti_1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];
*/

function PictureCarousel({ images }) {
    return (
        <div>
            <Carousel>
                {images.map((URL, index) => (
                <Carousel.Item>
                    <img alt="sample_file" src={URL} key={index} />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default PictureCarousel;