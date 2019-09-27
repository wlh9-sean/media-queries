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
        this.setState = {
            menu: !this.state.menu
        }
    }
    render() {
        
        return (
            <div>
                {/* Navbar */}
                <nav className='navbar'>
                    <h1 className='title'>Start Bootstrap</h1>
                    <div className='hamburger' onClick={this.slide}>&#9776;</div>
                        <link>Services</link>
                        <link>Portfolio</link>
                        <link>About</link>
                        <link>Team</link>
                        <link>Contact</link>
                </nav>
            </div>
        )
    }
}
