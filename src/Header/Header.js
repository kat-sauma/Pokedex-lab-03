import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header>
                <h2 className='title'>Pokedex</h2>
                {
                    this.props.location.pathname !== '/'
                    && < NavLink exact activeClassName='selected' to='/'>
                        Home
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/search'
                    && <NavLink exact activeClassName='selected' to='/search'>
                        Search
                    </NavLink>
                }
            </header >
        )
    }
})
