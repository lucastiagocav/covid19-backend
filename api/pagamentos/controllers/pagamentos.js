"use strict";
const axios = require("axios").default;
const Pagamento = require('../models/pagamentos');
const constantes = require('../util/constantes');
const router = express.Router();



module.exports = {
  getCovidData: async (ctx) => {
    const { data } = await axios.get(
      "https://covid19-brazil-api.now.sh/api/report/v1"
    );
    ctx.send(data);
  },
};


router.post('/notifica', (req, res) => {
  fetchTransactionDetails(req.body.notificationCode)
  .then(transaction => {
    updateTransaction(transaction)
    .then(tr => {
      res.status(200).send('ok');
    })
    .catch(err => {
      res.status(500).json(error);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

function fetchTransactionDetails(notificationCode) {
  const transaction_url = `/v3/transactions/notifications/${notificationCode}?token=${TOKEN}`;

  const options = {
    'method': 'GET',
    'hostname': HOST_PAGSEGURO,
    'path': transaction_url,
    'maxRedirects': 20
  };

  return new Promise((resolve, reject) => {
    const fetchDetails = https.request(options, (r) => {
      let chunks = [];

      r.on("data", (chunk) => {
        chunks.push(chunk);
      });

      r.on("end", (chunk) => {
        let body = Buffer.concat(chunks);
        let xmlData = body.toString();
        let jsonData = parser.parse(xmlData);
        resolve(jsonData.transaction);
      });

      r.on("error", (error) => {
        reject(error);
      });
    });

    fetchDetails.write('');
    fetchDetails.end();
  });
}

async function updateTransaction(transaction) {
  let pagamento = await Pagamento.findById(transaction.reference);
 
  pagamento.transaction_id = transaction.code;
  pagamento.estado = constantes.STATUS_TRANSACAO[parseInt(transaction.status)];

  console.log('atualizando transação:', transaction.reference);
  console.log('\tpagamento:', transaction.reference);
  console.log('\t\tnovo status:', pedido.estado);

  return await pagamento.save();
}

module.exports = router;