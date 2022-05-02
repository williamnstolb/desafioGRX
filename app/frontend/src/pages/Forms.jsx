import React, { Component } from 'react'
import BoxText from '../components/BoxText'
import SelectOption from '../components/SelectOption'
import Result from '../components/Result'
import Select from '../components/Select'
import { sendForms } from '../services/requests'
import Button from 'react-bootstrap/esm/Button'
import '../styles/pages/forms.css'

export default class Forms extends Component {
  constructor() {
    super()

    this.state = {
      Pergunta1: '',
      Pergunta2: '',
      Pergunta3: '',
      Pergunta4: '',
      // QuantidadePositiva: 0,
      // QuantidadeNegativa: 0,
      // QuantidadeNaoAvaliada: 0,
      sent: false,
      count: 0,
    }
  }

  componentDidMount() {
    this.setState({
      sent: false,
    })
  }

  countChar = (text) => {
    const element = document.getElementById('count-char');
    if (text.length < 15 || text.length > 200) {
      element.style.color = 'red';
    } else {
      element.style.color = 'white';
    }

    this.setState({
      count: text.length,
    });
  }


  onChange = async (event) => {
    const { name, value } = event.target;
    if (name === 'Pergunta4') this.countChar(value)
    this.setState({
      [name]: value,
    });
  }

  quantity = async () => {
    const { Pergunta1, Pergunta2, Pergunta3 } = this.state;
    let QuantidadePositiva = 0;
    let QuantidadeNegativa = 0;
    let QuantidadeNaoAvaliada = 0;

    this.setState({
      sent: false,
    })

    const Perguntas = [Pergunta1, Pergunta2, Pergunta3];

    Perguntas.forEach(pergunta => {
        QuantidadePositiva += (pergunta === 'Sim') ? 1 : 0;
        QuantidadeNegativa += (pergunta === 'Não') ? 1 : 0;
        QuantidadeNaoAvaliada += (pergunta === 'Não sei') ? 1 : 0;
        QuantidadePositiva += (pergunta === 'Agora') ? 2 : 0;           
      this.setState({
        QuantidadePositiva,
        QuantidadeNegativa,
        QuantidadeNaoAvaliada,
      });
    });    
  }

  onSubmit = async (event) => {
    event.preventDefault();
    await this.quantity();
    const forms = this.state;
    delete forms.sent;
    delete forms.count;
    await sendForms('/forms', forms);
    this.setState({
      sent: true,
    });
  }

  render() {
    const { sent, count } = this.state;
    return (
      <div class="container-sm d-flex-column justify-content-center">
        <form onSubmit={ this.onSubmit}>
          <div class=".card-body d-flex justify-content-center">
            <label htmlFor='pergunta1'>
              <h5 class="card-title">1) Você se considera bom em lógica?</h5>       
              <SelectOption name="Pergunta1" onChange={ this.onChange }/> 
            </label>
          </div>
          <div class=".card-body d-flex justify-content-center">
            <label htmlFor='pergunta2'>
              <h5 class="card-title">2) Gosta de aprender com desafios?</h5>
              <SelectOption name="Pergunta2" onChange={ this.onChange }/>
            </label>    
          </div>
          <div class=".card-body d-flex justify-content-center">
            <label htmlFor='pergunta3'>
              <h5 class="card-title">3) Gostaria de fazer parte da GRX?</h5>
              <Select name="Pergunta3" onChange={ this.onChange }/>
            </label>
          </div>
          <div class=".card-body d-flex justify-content-center">
            <label htmlFor='pergunta4'>
              <h5 class="card-title">4) Por favor, justifique a resposta anterior.</h5>
              <BoxText name="Pergunta4" onChange={ this.onChange }/>
              <p id="count-char">{ count }/200</p>
            </label>
          </div>
          <div class="d-flex justify-content-center" >
            <Button type="submit" id="btn-submit" class="btn btn-primary ">Enviar</Button>
          </div>
        </form>
        {sent && <Result />}
      </div>
    )
  }
}
