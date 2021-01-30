import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
class Contact extends Component {
    state = {}
    render() {
        return (<div>
            <h1>
                <Fade right>contact.</Fade>
            </h1>
            <Fade left>
                <div className='contact-content'>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                    <ul>
                        {data.social.map((link, index) => (
                            <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            </Fade>
        </div>);
    }
}
export default Contact;