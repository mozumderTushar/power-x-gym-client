import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Training.css'

const Training = () => {
    return (
        <section className="container my-5">
            <h1 className="text-center my-6">TRAINING <span className="commonColor">PROGRAMS</span></h1>
            <div className="row">
                <div className="col-md-5 yoga" >
                    <h3 className="commonBgColor p-3">YOGA TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></h3>
                </div>
                <div className="col-md-6 cardio">
                <h3 className="commonBgColor p-3">CARDIO TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></h3>
                </div>
            </div>
        </section>
    );
};

export default Training;