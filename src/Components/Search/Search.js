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
        loading: false,
        currentPage: 1,
        perPage: 50,
        totalPokemon: 0
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

        this.setState({
            loading: false,
            pokemon: data.body.results,
            totalPokemon: data.body.count
        });
    }

    handleClick = async () => {
        await this.setState({ currentPage: 1 });
        await this.fetchPokemon();
    }

    handleQueryChange = async (e) => {
        this.setState({
            query: e.target.value,
        });
    }

    handlePerPage = (e) => {
        this.state({ perPage: e.target.value })
    }

    handlePrevButtonClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });

        await this.fetchPokemon();
    }

    handleNextButtonClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });

        await this.fetchPokemon();
    }

    render() {
        const {
            pokemonData,
            loading,
        } = this.state;

        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
            <section>
                {/* <Header /> */}
                <aside>
                    <label>
                        <h3>Search</h3>
                        <input onChange={this.handleQueryChange} />
                        <button onClick={this.handleClick}>Go!</button>
                        <button onClick={this.handlePrevButtonClick} disabled={this.state.currentPage === 1} className='prev-page'>Prev</button>
                        <button onClick={this.handleNextButtonClick} disabled={this.state.currentPage === lastPage} className='next-page'>Next</button>
                        Results per page:
                        <select onChange={this.handlePerPage}>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={75}>75</option>
                            <option value={100}>100</option>
                        </select>
                        <h3>Page {this.state.currentPage}</h3>
                    </label>
                </aside>
                <title>
                    <h1>Pokemon</h1>
                </title>
                <div className='spinner'>
                    {
                        this.state.loading
                            ? <Spinner />
                            : <PokeList pokemonImages={this.state.pokemon} />
                    }
                </div>
            </section>
        )
    }
}