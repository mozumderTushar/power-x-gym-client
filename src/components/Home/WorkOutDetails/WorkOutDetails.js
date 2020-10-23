import React from 'react';
import './WorkOutDetails.css'

const WorkOutDetails = (props) => {
    console.log(props.work);
    const { name, img, infoImg, info } = props.work;
    return (
      
            <div className="col-md-4">
                <div className="card work" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="work-details">
                        <img src={infoImg} alt=""/>
                        <h3>{name}</h3>
                        <p><small>{info}</small></p>
                    </div>
                </div>
            </div>
      
    );
};

export default WorkOutDetails;