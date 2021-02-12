import React, { Component } from 'react'
import PokeList from './PokeList.js';
import pokemonImages from '../../Data.js';

export default class Search extends Component {
    render() {
        return (
            <div>
                <aside className='searchBar'></aside>
                <p>SEARCH PAGE</p>
                <PokeList pokemonImages={pokemonImages} />
            </div>
        )
    }
}
