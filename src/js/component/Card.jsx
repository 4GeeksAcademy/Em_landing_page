import React from "react";
import car from '../../img/car.jpg'

const Card = () => {
    return (
        <>
            <div className="card w-12rem mx-3 text-bg-secondary rounded">
                <img src={car} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
};
export default Card