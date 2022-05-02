import React, { Component } from 'react';
import '../styles/components/selectOption.css';

export default class SelectOption extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div class="btn-group btn-sm btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <label htmlFor="btn-yes" class="btn btn-yes">
          <input type="radio" name={ name } id="btn-yes" onChange={ onChange } value="Sim" required={ true }/> Sim
        </label>
        <label htmlFor="btn-no" class="btn btn-no">
          <input type="radio" name={ name } id="btn-no" onChange={ onChange } value="Não" required={ true }/> Não
        </label>
      </div>
    )
  }
}
