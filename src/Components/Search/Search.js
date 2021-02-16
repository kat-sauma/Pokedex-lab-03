import React, { Component } from 'react'
import PokeList from './PokeList.js';
import pokemonImages from '../../Data.js';
import SearchBar from './SearchBar.js';
import DropDown from './DropDown.js';

export default class Search extends Component {

    state = {
        pokemon: pokemonImages,
        sortOrder: 'Ascend',
        sortBy: 'pokemon',
        search: ''
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

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    // handleFilterType = (e) => {
    //     this.setState({
    //         filter: e.target.value
    //     })
    // }

    // handleFilterEgg1 = (e) => {
    //     this.setState({
    //         filter: e.target.value
    //     })
    // }

    // handleFilterEgg2 = (e) => {
    //     this.setState({
    //         filter: e.target.value
    //     })
    // }

    // handleFilterAbility = (e) => {
    //     this.setState({
    //         filter: e.target.value
    //     })
    // }


    render() {

        if (this.state.sortBy !== '') {

            if (this.state.sortOrder === 'Ascend') {
                this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
                //descending order
            } else { this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])) };
        }

        const filteredByName = pokemonImages.filter(poke => poke.pokemon.includes(this.state.search))

        // JSX turning into HTML
        return (
            <div className='side-bar'>
                <aside className='searchBar'>
                    {/* <DropDown
                        currentValue={this.state.pokemon}
                        handleChange={this.handleChange}
                        options={this.state.filter}
                    /> */}
                    <select
                        value={this.currentValue}
                        onChange={this.handleSortOrder}
                    >
                        <option value='Ascend'>Ascending</option>
                        <option value='Descend'>Descending</option>
                    </select>
                    <select
                        value={this.currentValue}
                        onChange={this.handleSortBy}
                    >
                        {/* {this.props.options.map(
                            listItem =>
                                <option value={listItem}> {listItem} </option>)
                        } */}
                        <option value='pokemon'>Pokemon</option>
                        <option value='type_1'>Type</option>
                        <option value='ability_hidden'>Ability</option>
                        <option value='egg_group_1'>Egg</option>

                    </select>
                    <SearchBar currentValue={this.state.search}
                        handleChange={this.handleSearch} />
                </aside>

                <PokeList pokemonImages={filteredByName} />
            </div>
        )
    }
}
