// Ganti 'http://localhost:5000/api/transactions' dengan URL backend yang sesuai
const response = await fetch('http://localhost:5000/api/transactions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
