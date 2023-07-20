import React from 'react';
import {Form} from "antd";
import './BannerForm.css'

function BannerFormComp(props) {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                <div className="carousel-item">Banner 1</div>
                <div className="carousel-item">Banner 2</div>
                <div className="carousel-item">Banner 3</div>
                <div className="carousel-item">Banner 4</div>
                <div className="carousel-item">banner 5</div>
                <div className="carousel-item">banner 6</div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
            </div>
        </div>
    );
}

export default BannerFormComp;