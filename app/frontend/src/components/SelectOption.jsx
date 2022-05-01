import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class SelectOption extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>          
          <label htmlFor='buttonYes'>
            <Button required={ true } id='buttonYes' value="Sim" name={ name } onChange={ onChange } selected variant="success">Sim</Button>
          </label>{ ' ' }
          <label htmlFor='buttonNo'>
            <Button required={ true } id='buttonNo'  value="Não" name={ name } onChange={ onChange } >Não</Button>
          </label>    
      </div>
    )
  }
}
