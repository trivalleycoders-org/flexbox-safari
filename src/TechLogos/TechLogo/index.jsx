// TechLogo

import React from 'react';
import classNames from 'classnames'
import './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      [props.style]: props.style ? true : false,
      'extra-tmp': true,
    }
  )
  return (
    <div>
      <img className={imageStyle} src={props.url} alt="logo" />
      <div className='logo-text'>{props.name}</div>
    </div>
  );
};

export default TechLogo;
