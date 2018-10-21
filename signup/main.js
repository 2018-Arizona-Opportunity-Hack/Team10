const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const { Pool } = require('pg');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join('index.html'));
});

app.get('/admin', function (req, res) {
  res.render(path.join('admin.html'));
});

app.get('/mycheckin', function (req, res) {
  res.render(path.join('mycheckin.html'));
});

// app.get('/db', async (req, res) => {
//     try {
//       const client = await pool.connect()
//       const result = await client.query('SELECT * FROM test_table');
//       const results = { 'results': (result) ? result.rows : null};
//       res.render('pages/db', results );
//       client.release();
//     } catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
//   });

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});