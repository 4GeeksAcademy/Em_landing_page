import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid"> 
                    <h2 className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBootstrap} style={{color:"#712cf9", backgroundSize:"2px"}}></FontAwesomeIcon>
                        <a className="navbar-brand p-1" href="#">Start Bootstrap</a>
                    </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav