import React, { Component } from 'react'
// import { getDatas } from '../services/api';

export default class Result extends Component {
  constructor() {
    super();
    
    this.state = {
      Total: 0,
      QuantidadePositiva: 0,
      QuantidadeNegativa: 0,
      QuantidadeNaoAvaliada: 0,
      loading: true,
    }
  }

  // updateState = async () => {
  //   const { total, positiva, negativa, naoAvaliada } = await getDatas('/forms');
  //   this.setState({
  //     Total: total,
  //     QuantidadePositiva: positiva,
  //     QuantidadeNegativa: negativa,
  //     QuantidadeNaoAvaliada: naoAvaliada,
  //     loading: false,
  //   });
  // }

  // async componentDidMount() {
  //   await this.updateState();
  // }

  calcPercentage = (quantity) => {
    const { Total } = this.state;
    const result = (Total !== 0) ? (quantity * 100) / Total : 0;
    return result.toFixed(2);
  }    

  render() {
    const { Total, QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliada } = this.state;
    return (
      <div>
        {this.state.loading ? <div>Carregando...</div> :
        <div>
            <h1>Resultado</h1>
          <div>
            <h2>Total de avaliações</h2>
            <div>{ Total }</div>
          </div>
          <div>
            <h3>Quantidade Positiva </h3>
            <div>{ QuantidadePositiva }</div>
            <h3>% Positiva </h3>
            <div>{ this.calcPercentage(QuantidadePositiva) }%</div>
          </div>
          <div>
            <h3>Quantidade Negativa </h3>
            <div>{ QuantidadeNegativa }</div>
            <h3>% Negativa </h3>
            <div>{ this.calcPercentage(QuantidadeNegativa) }%</div>
          </div>
          <div>
            <h3>Quantidade Não Avaliada </h3>
            <div>{ QuantidadeNaoAvaliada }</div>
            <h3>% Não Avaliada </h3>
            <div>{ this.calcPercentage(QuantidadeNaoAvaliada) }%</div>
          </div>  
        </div>        
        }        
      </div>
    )
  }
}
