// Members
import React from 'react';
import { Component } from 'react';
import { members } from './member-data'
import Member from './Member';
import './style.css';

class Members extends Component {
  render() {

    const renderMembers = members.map((m) => (
      <Member
        key={m.id}
        _id={m.id}
        picture={m.picture}
        name={m.name}
        role={m.role}
        index={m.index}
      />
    ))

    return (
      <div>
        <h3>Members</h3>
        <div className='members'>
          {renderMembers}
        </div>
      </div>
    )

  }
}

export default Members;
