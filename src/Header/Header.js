import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import '../index.css';
import './Header.css';

export default withRouter(class Header extends Component {
    render() {
        return (
            <>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
                <header>
                    <h2 className='title'>Pokedex</h2>
                    {
                        this.props.location.pathname !== '/'
                        && < NavLink className='nav-link' exact activeClassName='selected' to='/'>
                            Home
                        </NavLink>
                    }
                    {
                        this.props.location.pathname !== '/search'
                        && <NavLink className='nav-link' exact activeClassName='selected' to='/search'>
                            Search
                    </NavLink>
                    }
                </header>
            </>
        )
    }
})
