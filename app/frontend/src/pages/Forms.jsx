import React, { Component } from 'react'
import BoxText from '../components/BoxText'
import Button from '../components/Button'
import Select from '../components/Select'

export default class Forms extends Component {
  constructor() {
    super()

    this.state = {
      Pergunta1: '',
      Pergunta2: '',
      Pergunta3: '',
      Pergunta4: '',
    }
  }

  onChange = async (event) => {
    const { name, value } = event.target;    
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form >
        <label htmlFor='pergunta1'>
           <h3>1) Você se considera bom em lógica?</h3>       
           <Button name="Pergunta1" onChange={ this.onChange }/> 
        </label>
        <label htmlFor='pergunta2'>
            <h3>2) Gosta de aprender com desafios?</h3>
            <Button name="Pergunta2" onChange={ this.onChange }/>
          </label>                    
          <label htmlFor='pergunta3'>
            <h3>3) Gostaria de fazer parte da GRX?</h3>
            <Select name="Pergunta3" onChange={ this.onChange }/>
          </label>
          <label htmlFor='pergunta4'>
            <h3>4) Por favor, justifique a resposta anterior.</h3>
            <BoxText name="Pergunta4" onChange={ this.onChange }/>
          </label>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}
