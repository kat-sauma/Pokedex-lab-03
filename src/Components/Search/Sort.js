import React, { Component } from 'react'

export default class SortOrder extends Component {
    render() {
        return (
            <div className='sorting-hats'>
                <select
                    value={this.props.sortOrderValue}
                    onChange={this.props.handleSortOrder}
                >
                    <option value='Ascend'>Ascending</option>
                    <option value='Descend'>Descending</option>
                </select>
                <select
                    value={this.props.sortByValue}
                    onChange={this.props.handleSortBy}
                >
                    <option value='pokemon'>Pokemon</option>
                    <option value='type_1'>Type</option>
                    <option value='ability_hidden'>Ability</option>
                    <option value='egg_group_1'>Egg</option>

                </select>
            </div>
        )
    }
}
