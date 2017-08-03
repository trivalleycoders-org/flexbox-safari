// Member
import React from 'react';
import './style.css';
import Identicon from './../../Identicon'
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    if (!props.picture) {
      return <Identicon
        className='member-img'
        hash={props._id}
             />
    } else {
      return <img className='member-img' src={props.picture} responsive alt='member picture' />
    }
  }
  return (
    <div className='member-item'>
      <div className='member-img-container'>
        {getPicture()}
      </div>
      <div className='member-text'>
        <span className='member-name'>{props.name}</span>
        <span className='member-role'>{props.role}</span>
      </div>
    </div>
  )
};

export default Member;