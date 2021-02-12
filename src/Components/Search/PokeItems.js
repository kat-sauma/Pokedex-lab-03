import React, { Component } from 'react'

export default class PokeItems extends Component {
    render() {
        const {
            pokeProp: {
                _id,
                pokemon,
                hp,
                color,
                attack,
                defense,
                egg_group_1,
                url_image,
                pokebase,
                pokedex
            }
        } = this.props;
        return (
            <li
                className='pokemon-list'>
                <p className='id'>_id</p>
                <p className='pokemon'>pokemon</p>
                <p className='hp'>hp</p>
                <p className='color'>color</p>
                <p className='attack'>attack</p>
                <p className='defense'>defense</p>
                <p className='egg-group'>egg_group_1</p>
                <p className='url'>url_image</p>
                <p className='pokebase'>pokebase</p>
                <p className='pokedex'>pokedex</p>
            </li>
        )
    }
}
