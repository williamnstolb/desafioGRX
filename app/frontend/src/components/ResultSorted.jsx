import React, { Component } from 'react'

export default class ResultSorted extends Component {

  render() {
    const { quantity, percentage, title } = this.props;
    return (
      <div>
        <h3>Quantidade { title }</h3>
        <div>{ quantity }</div>
        <h3>% { title } </h3>
        <div>{ percentage }%</div>
      </div>
    )
  }
}
