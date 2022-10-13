import React from "react";
import classNames from "classnames/bind";
import styles from './styles/main.module.css'
import mainImage from './images/main-img.png'
import Marquee from "react-fast-marquee";

const cs = classNames.bind(styles)

const App = () => {
    return (
        <div>
            <div className={cs('name')}>
                <span style={{color: '#4a78b9'}}>string</span> <span style={{color: "#8ac8e5"}}>NAME</span> = <span
                style={{color: "#cf977c"}}>'Junho'</span>
            </div>

            <div className={cs('name2')}>
                <span style={{color: '#4a78b9'}}>date</span> <span style={{color: "#8ac8e5"}}>BIRTH</span> = <span
                style={{color: "#baccab"}}>'2004-07-05'</span>
            </div>
            <div className={cs('name3')}>
                <span style={{color: '#4a78b9'}}>int</span> <span style={{color: "#8ac8e5"}}>HEIGHT</span> = <span
                style={{color: "#baccab"}}>'167'</span>
            </div>
            <button className={cs("custom-btn", "btn-12")}>
                <span>Click!</span>
                <span>Read More</span>
            </button>




            <div className={cs('img-container')}>
                <div style={{ color: '#fff' }} className={cs('marquee')}>
                    <Marquee
                        gradient={false}
                        speed={20}
                    >
                        "IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE
                    </Marquee>
                </div>
                <img src={mainImage} className={cs('img')}/>
                <div style={{ color: '#fff' }} className={cs('marquee')}>
                    <Marquee
                        gradient={false}
                        speed={20}
                    >
                        "IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE"IMAGE
                    </Marquee>
                </div>
            </div>


        </div>
    );

}

export default App;
