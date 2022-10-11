import React from "react";
import classNames from "classnames/bind";
import styles from './styles/main.module.css'

const cs = classNames.bind(styles)

const App = () => {
  return (
    <div>
      <div className={cs('title')}>Junho's portfolio</div>
    </div>
  );
}

export default App;
