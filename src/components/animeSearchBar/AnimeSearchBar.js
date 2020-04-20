import React, { Component } from 'react'
import './animeSearchBar.css'

export default class AnimeSearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      q: 'fate',
      genre: 1,
      ...this.props.defaultValue
    }
  }

  handleChange = (e) => {
    let attr = e.target.name
    let value = e.target.value;
    if (attr === 'genre') {
      value = +value;
    }
    this.setState({
      [attr]: value
    })
  }

  handleSearch = () => {
    //点击之后查询
    if (this.props.onSearch) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    return (
      <div className="searchBar">
        类型：
        <select value={this.state.genre} onChange={this.handleChange} name='genre'>
          <option value={1}>Action</option>
          <option value={2}>Adventure</option>
          <option value={3}>Cars</option>
          <option value={11}>Game</option>
          <option value={30}>Sports</option>
        </select>
        关键字：
        <input type='text' value={this.state.q} onChange={this.handleChange} name='q' />
        <button onClick={this.handleSearch}>查询</button>
      </div>
    )
  }
}
