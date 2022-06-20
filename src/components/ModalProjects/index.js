import React, { useState, useEffect } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectDetailsCarousel from "../ProjectDetailsCarousel";
import api from "../../services/api";

const ModalProjects = (props) => {
    const [projectData, setProjectData] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    const idProject = props.projectid;

    const getProjectById = async () => {
        await api
            .get(`project/${idProject}`)
            .then((response) => {
                setProjectData(response.data);
                setProjectImages(response.data.images)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        getProjectById();
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <ProjectDetailsCarousel data={projectImages} />

                <div className="modal-projects-body">
                    <h4 className="modal-projects-title">{projectData.title}</h4>
                    <p>
                        {projectData.description}
                    </p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalProjects;