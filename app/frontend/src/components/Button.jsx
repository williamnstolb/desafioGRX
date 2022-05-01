import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>
          <input required={ true } id='buttonYes' type='radio' value="Sim" name={ name } onChange={ onChange } />
          <label htmlFor='buttonY'>Sim</label>

          <input required={ true } id='buttonNo' type='radio' value="Não" name={ name } onChange={ onChange } />
          <label htmlFor='buttonN'>Não</label>
    
      </div>
    )
  }
}
