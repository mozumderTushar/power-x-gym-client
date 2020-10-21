import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
       <div className="container">
            <nav className="navbar navbar-expand-lg  bg-transparent" >
            <a className="navbar-brand" href="/"><h1 style={{color: '#fff'}}>POWER <span style={{color: '#F9D542'}}>X</span></h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto" >
                    <li className="nav-item active">
                        <a className="nav-link " href="/" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/services">Services <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/classes">Our Classes <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/about">About us <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/blog">Blog <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/pricing">Pricing <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/contact">Contact Us <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
            </div>
        </nav>
       </div>
    );
};

export default Navbar;