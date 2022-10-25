import React from 'react'
import styles from '../styles/header.module.css'
import classNames from "classnames/bind";
import {useNavigate} from "react-router";

const cs = classNames.bind(styles)

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={cs('buttons-container')}>
                <button onClick={() => navigate('/contact')}>CONTACTS</button>
                <button onClick={() => navigate('/projects')}>PROJECTS</button>
                <button onClick={() => navigate('/about-me')}>ABOUT ME</button>
            </div>
        </div>
    )
}

export default Header