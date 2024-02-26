const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Atur port sesuai kebutuhan

app.use(cors());
app.use(bodyParser.json());

// Simpan data transaksi
const transactions = [];

// Handler untuk menerima data transaksi dari frontend
app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  console.log('New Transaction:', newTransaction);
  res.status(201).json({ message: 'Transaction saved successfully' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
