import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1 className='title'>Pokedex</h1>
                <nav className='nav-bar'>
                    <a className='link-search-page' href='https://pokedex-3000.netlify.app/search'>Search</a>
                    <br />
                    <a className='link-home-page' href='https://pokedex-3000.netlify.app/'>Home</a>
                </nav>
            </header>
        )
    }
}
