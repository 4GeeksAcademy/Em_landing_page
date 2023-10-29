import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'

const Jumbotron = () => {
    return (
        <>
            <div className="p-5 mb-4 bg-body-tertiary rounded-3 bg-secondary m-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        React <FontAwesomeIcon icon={faReact} style={{color: "#ffffff"}}></FontAwesomeIcon>
                        <br />
                        Bootstrap <FontAwesomeIcon icon={faBootstrap} style={{color:"#ffffff"}}></FontAwesomeIcon>
                    </h1>
                    <p className="col-md-8 fs-4 my-4">This website was built with GitHub's Codespaces, React, and Bootstrap, this site represents innovation at its best. Explore our world of creativity, designed and coded with cutting-edge technologies. Enjoy your journey through the power of open-source collaboration!</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
        </>
    );
};
export default Jumbotron