import React from 'react';
import gymVideo from '../../../Image/gym.mp4'

const HeaderMain = () => {
    return (
        <div className="container text-white my-5">
            <div className="row d-flex  justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1 style={{fontWeight:'bolder'}}>THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
                    <p>Lorem ipsum has been the industry's standard dummy text ever since the 1500, when an
                        <br /> unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        <br /> survived not only five centuries, but also the leap into electronic typesetting, remaining
                    </p>
                </div>
                <div className="col-md-6">
                    {/* <video 
                    src={gymVideo} 
                    width="650" 
                    height="600"
                    controls="controls" 
                    autoPlay loop muted /> */}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;