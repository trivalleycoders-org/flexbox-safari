// TechLogo

import React from 'react';
import classNames from 'classnames'
import './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      [props.style]: true,
      'extra-tmp': true,
      'logo-height': true,
    }
  )
  return (
    <div className='tech-logo'>
      <img className={imageStyle} src={props.url} alt="logo" />
      <div className='logo-text'>{props.name}</div>
    </div>
  );
};

export default TechLogo;
