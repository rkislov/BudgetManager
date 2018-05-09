require('module-alias/register');
const http = require('http'),
    API = require('@BudgAPI'),
    Server = http.Server(API),
    PORT = process.env.PORT || 3001,
    LOCAL = '0.0.0.0';
Server.listen(PORT,LOCAL, () =>console.log(`сёервер API запущен на порту $(PORT)`));