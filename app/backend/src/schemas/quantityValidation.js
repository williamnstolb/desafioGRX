const calcQuantity = (forms) => {
  const {
    Pergunta1,
    Pergunta2,
    Pergunta3,
    QuantidadePositiva,
    QuantidadeNegativa,
    QuantidadeNaoAvaliada,
  } = forms;

  const Perguntas = [Pergunta1, Pergunta2, Pergunta3];
  let quantPositivas = 0;
  let quantNegativas = 0;
  let quantNaoAvaliadas = 0;

  Perguntas.forEach((pergunta) => {
      quantPositivas += (pergunta === 'Sim') ? 1 : 0;
      quantNegativas += (pergunta === 'Não') ? 1 : 0;
      quantNaoAvaliadas += (pergunta === 'Não sei') ? 1 : 0;
      quantPositivas += (pergunta === 'Agora') ? 2 : 0;
  });

  return (quantPositivas === QuantidadePositiva &&
          quantNegativas === QuantidadeNegativa &&
          quantNaoAvaliadas === QuantidadeNaoAvaliada);
};

module.exports = calcQuantity;
