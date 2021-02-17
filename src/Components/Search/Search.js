import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './PokeList.js';
import Spinner from '../Spinner.js';
import './search.css';
// import Header from '../Header.js';
// import pokemonImages from '../../Data.js';
// import SearchBar from './SearchBar.js';
// import DropDown from './DropDown.js';
// import SortOrder from './Sort.js';


export default class Search extends Component {

    state = {
        pokemon: [],
        query: '',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);

        this.setState({
            loading: false,
            pokemon: data.body.results,
        });
    }

    handleClick = async () => {
        await this.fetchPokemon();
    }

    handleQueryChange = async (e) => {
        this.setState({
            query: e.target.value,
        });
    }

    render() {

        return (
            <section>
                {/* <Header /> */}
                <aside>
                    <label>
                        <h3>Search</h3>
                        <input onChange={this.handleQueryChange} />
                    </label>
                    <button onClick={this.handleClick}>Go!</button>
                </aside>
                <title>
                    <h1>Pokemon</h1>
                </title>
                <div className='spinner'>
                    {
                        this.state.loading
                            ? <Spinner />
                            : this.state.pokemon.map(poke =>
                                <div key={poke.pokemon}>
                                    <p className='rendered-pokemon'>
                                        <img src={poke.url_image} alt="pokemon" />
                                    </p>
                                    <h4>{poke.pokemon} :</h4>
                                    <p className='poke-info'>
                                        {poke.type_1}
                                        <br></br>
                                        {poke.attack}
                                        <br></br>
                                        {poke.defense}
                                        <br></br>
                                        {poke.egg_group_1}
                                    </p>
                                </div>)
                    }
                </div>
                <main className='pokemon-images'>
                    {/* <PokeList pokemonImages={this.state.pokemon} /> */}
                </main>
            </section>
        )
    }
}