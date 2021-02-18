import React, { Component } from 'react'
import request from 'superagent';
// import PokeList from './PokeList.js';
import Spinner from './Components/Spinner.js';
import PokeItems from './Components/Search/PokeItems.js';

export default class DetailPage extends Component {

    state = {
        pokemonData: {},
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName)
        });
    }

    render() {
        return (
            <section className='detail-page'>
                {
                    this.state.loading
                        ? <Spinner />
                        : <PokeItems pokeProp={this.state.pokemonData} />
                    // <p>{this.state.pokemonData.pokemon}</p>
                }
            </section>
        )
    }
}
