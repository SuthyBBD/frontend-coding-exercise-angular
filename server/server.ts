import * as express from 'express';

const app = express();

const dayjs = require('dayjs');

const orders = require('./data/orders.json');

orders.sort(function (a, b) {
  const date1 = dayjs(a.requestedDeliveryDate);
  const date2 = dayjs(b.requestedDeliveryDate);
  return date1 - date2;

}).reverse();

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('');
});

/**
 * Fetches a list of orders, paginated.
 * Parameters: page (number) the current page, starting at 1.
 */
app.get('/api/orders', (req, res) => {
  const page = req.query.page ? Math.max(1, req.query.page) : 1;

  const items = orders.slice(100 * (page - 1), 100 * page);

  res.send({
    page: page,
    pageSize: 100,
    total: orders.length,
    count: items.length,
    items
  });
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(function (orderItem) {
    return orderItem.id == req.params.id;
  });
  res.send(order);
});

app.listen(4300, () => console.log('Server active on port 4300!'));
