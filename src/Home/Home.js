import React, { Component } from 'react'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <p>HOME PAGE</p>
                <img className='umbreon' alt='umbreon' src='./umbreon-cutie.png'></img>
                <img className='jiggly-puff' alt='jiggly-puff' src='./jiggly-puff.png'></img>
                <img className='evee' alt='evee' src='./evee.png'></img>
                <img className='flareon' alt='flareon' src='./flareon.png'></img>
            </div>
        )
    }
}
