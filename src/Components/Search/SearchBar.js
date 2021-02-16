import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <p>SEARCH PAGE</p>
                <input
                    value={this.props.currentValue}
                    onChange={this.props.handleChange} />
                <button>Submit</button>
            </div>
        )
    }
}
