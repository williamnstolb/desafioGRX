const calcData = (data) => {
  let positiva = 0;
  let negativa = 0;
  let naoAvaliada = 0;

  data.forEach((item) => {
    const { QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliada } = item;   
    positiva += QuantidadePositiva;
    negativa += QuantidadeNegativa;
    naoAvaliada += QuantidadeNaoAvaliada;
  });

  const total = positiva + negativa + naoAvaliada;
  const result = {
    total,
    positiva,
    negativa,
    naoAvaliada,
  };
  return result;
};

module.exports = calcData;