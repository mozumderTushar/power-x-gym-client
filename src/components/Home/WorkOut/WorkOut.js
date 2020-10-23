import React from 'react';
import workOne from '../../../Image/work1.png'
import './WorkOut.css'

const WorkOut = () => {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-md-4 one">
                    <div class="card" >
                        <img src={workOne} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkOut;