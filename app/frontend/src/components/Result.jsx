import React, { Component } from 'react';
import { getData } from '../services/requests';
import ResultSorted from '../components/ResultSorted';

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

   updateState = async () => {
    const { total, positiva, negativa, naoAvaliada } = await getData('/forms');
    this.setState({
      Total: total,
      QuantidadePositiva: positiva,
      QuantidadeNegativa: negativa,
      QuantidadeNaoAvaliada: naoAvaliada,
      loading: false,
    });
  }

  async componentDidMount() {
    await this.updateState();
  }

  calcPercentage = (quantity) => {
    const { Total } = this.state;
    const result = (Total !== 0) ? (quantity * 100) / Total : 0;
    return result.toFixed(2);
  }

  createList = () => {
    const { QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliada } = this.state;
    const list = [
      {
        title: 'Positivas',
        quantity: QuantidadePositiva,
        percentage: this.calcPercentage(QuantidadePositiva),
      },
      {
        title: 'Negativas',
        quantity: QuantidadeNegativa,
        percentage: this.calcPercentage(QuantidadeNegativa),
      },
      {
        title: 'Não avaliadas',
        quantity: QuantidadeNaoAvaliada,
        percentage: this.calcPercentage(QuantidadeNaoAvaliada),
      },
    ];
    return list.sort((a, b) => b.quantity - a.quantity);
  }


  render() {
    const { Total } = this.state;
    const listSorted = this.createList();
    return (
      <div>
        {this.state.loading ? <div>Carregando...</div> :
        <div>
            <h1>Resultado</h1>
          <div>
            <h2>Total de avaliações</h2>
            <div>{ Total }</div>
          </div>
          { listSorted.map(item => (
            <div key={item.title}>
              <ResultSorted 
                title={item.title}
                quantity={item.quantity}
                percentage={item.percentage}
              />
            </div>          
          ))}
        </div>        
        }        
      </div>
    )
  }
}
