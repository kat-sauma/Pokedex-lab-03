import React, { Component } from 'react'
import PokeList from './PokeList.js';
import pokemonImages from '../../Data.js';
import SearchBar from './SearchBar.js';

export default class Search extends Component {

    state = {
        pokemon: pokemonImages,
        sortOrder: 'Ascend',
        sortBy: 'pokemon',
        filter: ''
    }

    handleSortOrder = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }

    handleFilter = (e) => {
        this.setState({
            filter: e.target.value
        })
    }
    render() {

        if (this.state.sortBy !== '') {

            if (this.state.sortOrder === 'Ascend') {
                this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
                //descending order
            } else { this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])) };
        }

        const filteredPokemon = pokemonImages.filter(pokemon => pokemon.pokemon.includes(this.state.filter))
        // JSX turning into HTML
        return (
            <div>
                <aside className='searchBar'>
                    <SearchBar currentValue={this.state.filter}
                        handleChange={this.handleFilter} />
                </aside>

                <PokeList pokemonImages={filteredPokemon} />
            </div>
        )
    }
}
