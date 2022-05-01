import React, { Component } from 'react';
import '../styles/components/selectOption.css';

export default class SelectOption extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div class="btn-group btn-sm btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <label forHtml="btn-yes" class="btn btn-yes">
          <input type="radio" name={ name } id="btn-yes" autocomplete="off" onChange={ onChange } value="Sim"/> Sim
        </label>
        <label forHtml="btn-no" class="btn btn-no">
          <input type="radio" name={ name } id="btn-no" autocomplete="off" onChange={ onChange } value="Não"/> Não
        </label>
      </div>
    )
  }
}
