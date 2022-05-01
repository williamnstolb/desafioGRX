const Joi = require('joi');

const DATA_NOT_FOUND = 'Data not found';

module.exports = Joi.object().keys({
  Pergunta1: Joi.string().required().messages({ DATA_NOT_FOUND }),
  Pergunta2: Joi.string().required().messages({ DATA_NOT_FOUND }),
  Pergunta3: Joi.string().required().messages({ DATA_NOT_FOUND }),
  Pergunta4: Joi.string().min(15).max(200).required().messages({ DATA_NOT_FOUND }),
  QuantidadePositiva: Joi.number().min(0).max(4).required().messages({ DATA_NOT_FOUND }),
  QuantidadeNegativa: Joi.number().min(0).max(3).required().messages({ DATA_NOT_FOUND }),
  QuantidadeNaoAvaliada: Joi.number().min(0).max(1).required().messages({ DATA_NOT_FOUND }),
  });
  