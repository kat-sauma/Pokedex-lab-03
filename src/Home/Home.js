import React, { Component } from 'react'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <main>
                <div className='home-page'>
                    <h3>HOME PAGE</h3>
                    <div className='three'>
                        <img className='evee' alt='evee' src='./evee.png'></img>
                        <img className='flareon' alt='flareon' src='./flareon.png'></img>
                        <img className='umbreon' alt='umbreon' src='./umbreon-cutie.png'></img>
                    </div>
                    <div className='jiggly-puff'>
                        <img alt='jiggly-puff' src='./jiggly-puff.png'></img>
                    </div>
                    {/* <img className='pikachu' alt='pikachu' src='./pikachu.png'></img> */}
                </div>
            </main>
        )
    }
}
