import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            menu: false
        }
    }

    slide = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className='navbar'>
                    <h1 className='title'>Start Bootstrap</h1>
                    <div className='hamburger' onClick={this.slide}>
                        &#9776;
                    </div>
                    <div className='menu'>
                        <p>Services</p>
                        <p>Portfolio</p>
                        <p>About</p>
                        <p>Team</p>
                        <p>Contact</p>
                    </div>
                </nav>

                {/* Slide Out */}
                <div className={
                    this.state.menu ?
                    'slideMenu slide' :
                    'slideMenu'
                }>
                   <p>Services</p> 
                   <p>Portfolio</p> 
                   <p>About</p> 
                   <p>Team</p> 
                   <p>Contact</p> 
                </div>
            </div>
        )
    }
}
