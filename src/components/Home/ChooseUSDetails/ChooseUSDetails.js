import React from 'react';
import './ChooseUSDetails.css'

const ChooseUSDetails = (props) => {
    console.log(props.details.name);
    const { img, name, info } = props.details;

    return (
        <div className="col-md-4 my-5">
            <div className="card card-details mb-5">
                <img src={img} className="card-img-top mt-3" alt="..." style={{height:'92px', width:'92px', margin:'0 auto'}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{info}</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUSDetails;