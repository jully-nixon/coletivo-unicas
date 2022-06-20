import React, { useState, useEffect } from 'react';
import './style.css';
import BackgroundProjectBorder from '../../assets/images/bg_project_border.svg';
import Carousel from 'react-elastic-carousel';
import ModalProjects from '../../components/ModalProjects';


const CarouselProjects = ({ data }) => {
    let [itemsToShowDevice, setItemsToShowDevice] = useState(3);
    const [modalShowData, setModalShowData] = useState(false);
    const [projectDataId, setProjectDataId] = useState('');

    const modalShow = (id) => {
        setProjectDataId(id);
        setModalShowData(true);
    }

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setItemsToShowDevice(1);
        }
    }, []);

    return (
        <div className='carousel-projects'>
            <Carousel
                itemsToShow={itemsToShowDevice}
                pagination={false}
            >
                {data.map((project, id) =>
                    <div key={id} className='carousel-projects-background' onClick={() => modalShow(project.ID)}>
                        <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                        <img className='carousel-projects-image' src={project.images[0].image} alt='projects' />
                        <label className='carousel-projects-title'>
                            {project.title}
                        </label>
                    </div>
                )}
            </Carousel>
            <div>
                {modalShowData &&
                    <ModalProjects
                        show={modalShowData}
                        projectid={projectDataId}
                        onHide={() => setModalShowData(false)} />
                }
            </div>
        </div>
    )
}

export default CarouselProjects;