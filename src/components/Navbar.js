import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (<nav>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={0}
                    onClick={this.scrollToTop}
                >home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={0}
                >about</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >projects</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >contact</Link></li>
            </ul>
        </nav>);
    }
}
export default Navbar;