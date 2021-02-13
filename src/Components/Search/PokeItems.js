import React, { Component } from 'react'

export default class PokeItems extends Component {
    render() {
        const {
            pokeProp: {
                pokemon,
                hp,
                color,
                attack,
                defense,
                egg_group_1,
                url_image
                // pokebase,
                // pokedex
            }
        } = this.props;
        return (
            <li
                className='pokemon-list'>
                <h2 className='pokemon'>{pokemon}</h2>
                <p className='hp'>{hp}</p>
                <p className='color'>Health: {color}</p>
                <p className='attack'>Attack: {attack}</p>
                <p className='defense'>Defense: {defense}</p>
                <p className='egg-group'>Egg: {egg_group_1}</p>
                <img alt='pokemon-images' className='url-image' src={url_image} />
                {/* <p className='pokebase'>{pokebase}</p>
                <p className='pokedex'>{pokedex}</p> */}
            </li>
        )
    }
}
