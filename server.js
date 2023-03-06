const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).json({
      message: 'server API-NGINX-2 RODANDO NA PORTA 3001',
   });
});

app.listen(3001, () => {
   console.log('server api-nginx-2 rodando na porta 3001');
});
