import React, {FC} from "react";

import './image-carousel.scss';

export const ImageCarousel: FC = () => {
    const image = 'https://placekitten.com/500/500';

    const plusSlides = (): void => {
        return;
    };

    return (
        <div className="image-carousel">
            <div className="image-carousel__slide">
                <img src="https://placekitten.com/500/500" />
            </div>
            <div className="image-carousel__slide">
                <img src={"https://placekitten.com/500/500"} />
            </div>
            <div className="image-carousel__slide">
                <img src={"https://placekitten.com/500/500"} />
            </div>
            <button className="prev" onClick={plusSlides}>&#10094;</button>
            <button  className="next" onClick={() => {plusSlides()}}>&#10095;</button>
        </div>
    );
};