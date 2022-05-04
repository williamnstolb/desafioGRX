import React, { Component } from 'react';
import '../styles/components/select.css';

export default class Select extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div class="d-flex justify-content-center">
        <select id="select" name={ name } onChange={ onChange } required={ true }>
          <option value=""></option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
          <option value="Não sei">Não sei</option>
          <option value="Agora">Agora</option>
         </select>
      </div>
    )
  }
}