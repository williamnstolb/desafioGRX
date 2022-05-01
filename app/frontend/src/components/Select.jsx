import React, { Component } from 'react'

export default class Select extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>
        <select name={ name } onChange={ onChange } required={ true }>
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