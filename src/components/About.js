import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
class About extends Component {
    state = {}
    render() {
        return (<div className='about'>
            <div className='about-content'>
                <h1><Fade right>about.</Fade></h1>
                <Fade left>
                    <p>{data.abouttext}</p>
                </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='About.'></img> : null}
        </div>);
    }
}
export default About;