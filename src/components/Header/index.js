import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/logo_header.svg';
import './style.css';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' >

                <Container>
                    <img alt='logo' src={Logo} />
                    <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
                    <div className='header-container'>


                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav >
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="banner"
                                >Início
                                </Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="about"
                                >Sobre
                                </Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="projects">Projetos
                                </Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="ourTeam">Nosso time
                                </Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to='contact'>Contato
                                </Link>
                            </Nav>
                        </Navbar.Collapse>

                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;