import React, { Component } from 'react'

export default class ResultSorted extends Component {

  render() {
    const { quantity, percentage, title } = this.props;
    return (
      <div class="card-group row row-cols-1 row-cols-md-2 g-4 justify-content-space-evenly">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Quantidade { title }</div>
          <div class="card-body">
            <h5 class="card-title">{ quantity }</h5>
          </div>
        </div>
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Porcentagem { title }</div>
          <div class="card-body">
            <h5 class="card-title">{ percentage }%</h5>
           </div>
        </div>
      </div>     
    )
  }
}
