import React, { Component } from 'react'
import PokeItem from './PokeItems.js';

export default class PokeList extends Component {
    render() {
        return (
            <ul className='poke-list'>
                { this.props.pokemonImages.map(pokemon =>
                    <PokeItem
                        key={pokemon._id}
                        pokeProp={pokemon}
                    />)}
            </ul>
        )
    }
}
