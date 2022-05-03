import React, { Component } from 'react';
import { getData } from '../services/requests';
import ResultSorted from '../components/ResultSorted';
import '../styles/components/result.css';

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
        title: 'Positiva',
        quantity: QuantidadePositiva,
        percentage: this.calcPercentage(QuantidadePositiva),
      },
      {
        title: 'Negativa',
        quantity: QuantidadeNegativa,
        percentage: this.calcPercentage(QuantidadeNegativa),
      },
      {
        title: 'Não avaliada',
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
      <div class="container-sm d-flex justify-content-center">
        {  this.state.loading ? <div>Carregando...</div> :
          <div class="card-base d-flex-column align-content-space-around">
            <div class="card text-white mb-3 bg-primary">
              <h5 class="card-header">Total</h5>
              <div class="card-body">
                <h5 class="card-title">{Total}</h5>
              </div>
            </div>
            <div>
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
          </div>
        }
      </div>
    )
  }
}
