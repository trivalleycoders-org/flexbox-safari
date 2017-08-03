// TechLogo

import React from 'react';
import classNames from 'classnames'
import './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      [props.style]: props.style ? true : false,
    }
  )
  return (
    <div className='logo-item'>
      <img className={imageStyle} src={props.url} alt="logo" />
      <span className='logo-text'>{props.name}</span>
    </div>
  );
};

export default TechLogo;
