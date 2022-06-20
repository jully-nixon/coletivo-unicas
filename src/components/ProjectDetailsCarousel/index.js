import React from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectDetailsCarousel = ({ data }) => {
    return (
        <div>
            <Carousel
                itemsToShow={2}
                pagination={true}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={2000}
            >
                {data.map((url, id) =>
                    <LazyLoadImage
                        key={id}
                        className='project-details-carousel-image'
                        src={url.image}
                        alt='projects'
                        effect="blur"
                    />
                )}
            </Carousel>
        </div>
    )
}

export default ProjectDetailsCarousel;