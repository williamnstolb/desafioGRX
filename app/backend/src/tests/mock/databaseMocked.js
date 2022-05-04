  const databaseMocked = [{
    id: 1,
    Pergunta1: "Sim",
    Pergunta2: "Sim",
    Pergunta3: "Agora",
    Pergunta4: "Texto com pelo menos 15 caracteres.",
    QuantidadePositiva: 4,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  },
  {
    id: 2,
    Pergunta1: "Não",
    Pergunta2: "Não",
    Pergunta3: "Não sei",
    Pergunta4: "Texto com pelo menos 15 caracteres.",
    QuantidadePositiva: 0,
    QuantidadeNegativa: 2,
    QuantidadeNaoAvaliada: 1,
  },
];

const bodyCorrectToCreate = {
  Pergunta1: "Sim",
  Pergunta2: "Sim",
  Pergunta3: "Agora",
  Pergunta4: "Texto com pelo menos 15 caracteres.",
  QuantidadePositiva: 4,
  QuantidadeNegativa: 0,
  QuantidadeNaoAvaliada: 0,
};

const bodyIncorrectToCreate = {
  Pergunta1: "Não",
  Pergunta2: "Sim",
  Pergunta3: "Agora",
  Pergunta4: "Texto com pelo menos 15 caracteres.",
  QuantidadePositiva: 4,
  QuantidadeNegativa: 0,
  QuantidadeNaoAvaliada: 0,
  QuantidadePositiva: 4,
};

module.exports = {
  databaseMocked,
  bodyCorrectToCreate,
  bodyIncorrectToCreate,
};
