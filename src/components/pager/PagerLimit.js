import React, { Component } from 'react'
import './pagerLimit.css'

export default class PagerLimit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 7,
      ...this.props.defaultValue
    }
  }
  handleClick = (e) => {
    let attr = e.target.name;
    let sym = e.target.value;
    sym === "-" ? this.setState({
      [attr]: this.state[attr] - 1 >= 1 ? this.state[attr] - 1 : 1
    }, () => {
      this.props.onSearch && this.props.onSearch(this.state);
    }) : this.setState({
      [attr]: this.state[attr] + 1
    }, () => {
      this.props.onSearch && this.props.onSearch(this.state);
    })
  }



  render() {
    return (
      <div className="pagerLimit">
        <button onClick={this.handleClick} name="page" value='-'>-</button>
        <span>page: {this.state.page}</span>
        <button onClick={this.handleClick} name="page" value='+'>+</button>

        <button onClick={this.handleClick} name="limit" value='-'>-</button>
        <span>limit: {this.state.limit}</span>
        <button onClick={this.handleClick} name="limit" value='+'>+</button>

      </div>
    )
  }
}
