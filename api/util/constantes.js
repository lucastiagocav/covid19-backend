const AGUARDANDO_PAGAMENTO = 'aguardando_pagamento';
const EM_ANALISE = 'em_analise';
const PAGA = 'paga';
const DISPONIVEL = 'disponivel';
const EM_DISPUTA = 'em_disputa';
const DEVOLVIDA = 'devolvida';
const CANCELADA = 'cancelada';
const DEBITADO = 'debitado';
const RETENCAO_TEMPORARIA = 'retencao_temporaria';


const STATUS_TRANSACAO = [
  '',
  AGUARDANDO_PAGAMENTO,
  EM_ANALISE,
  PAGA,
  DISPONIVEL,
  EM_DISPUTA,
  DEVOLVIDA,
  CANCELADA,
  DEBITADO,
  RETENCAO_TEMPORARIA
];


module.exports = {
  AGUARDANDO_PAGAMENTO,
  EM_ANALISE,
  PAGA,
  DISPONIVEL,
  EM_DISPUTA,
  DEVOLVIDA,
  CANCELADA,
  DEBITADO,
  RETENCAO_TEMPORARIA,
  STATUS_TRANSACAO
};