import React, { Component } from 'react'

export default class SelectOption extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label forHtml="Sim" class="btn btn-success">
          <input type="radio" name={ name } id="Sim" autocomplete="off" onChange={ onChange } value="Sim"/> Sim
        </label>
        <label forHtml="Não" class="btn btn-danger">
          <input type="radio" name={ name } id="Não" autocomplete="off" onChange={ onChange } value="Não"/> Não
        </label>
      </div>
    )
  }
}
