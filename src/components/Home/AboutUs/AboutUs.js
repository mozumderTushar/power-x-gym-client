import React from 'react';
import aboutUs from '../../../Image/aboutUs.jpg'

const AboutUs = () => {
    return (
        <section className="container my-5">
            <div className="row p-3">
                <div className="col-md-6">
                    <img src={aboutUs} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6 mt-3">
                    <h1 style={{color: '#F4F4F5', fontSize:'40px'}}>ABOUT US</h1>
                    <h2 style={{color: '#FCCA42'}}>WE ARE HERE TO DREAM!</h2>
                    <h2 style={{color: '#171426'}}>OUR TEAM IS HERE SERVE YOU</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse nobis natus perspiciatis eligendi deleniti quod est optio beatae, minima ratione laudantium velit voluptatibus aspernatur. Quisquam repudiandae iste et facere!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;