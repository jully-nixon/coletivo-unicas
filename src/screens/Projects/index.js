import React, { useState, useEffect } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import BackgroundProjects from '../../assets/images/bg_projects.svg';
import api from "../../services/api";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    const getProjects = async () => {
        await api
            .get("projects")
            .then((response) => {
                setProjectsData(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div id='projects'>
            <div>
                <h2 className='projects-title'>NOSSOS PROJETOS</h2>
                <CarouselProjects
                    data={projectsData}
                />
                <img className='projects-background' src={BackgroundProjects} alt='BackgroundProjects' />
            </div>

        </div>
    )
}

export default Projects;