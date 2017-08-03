// TechLogos
import React from 'react';
import { Component } from 'react';
import TechLogo from './TechLogo';
import './style.css';
import { basicsLogos, mernLogos } from './logo-data'

class TechLogos extends Component {
  render() {

    const basics = basicsLogos.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
        style={t.style}
      />
    ))

    const mern = mernLogos.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        style={t.style}
        url={t.image}
      />
    ))

    return (
      <div>
        <h3 className='logo-title'>The Basics</h3>
        <div>
          <div className='logo-row'>
            {basics}
          </div>
        </div>
        <h3 className='logo-title'>MERN Stack</h3>
        <div>
          <div className='logo-row'>
            {mern}
          </div>
        </div>
      </div>
    )
  }
}

export default TechLogos;
