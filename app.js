const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // Cambia el número de puerto según tus necesidades
const router = require('./src/router/index');

// Configurar la conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1/nodeGPT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verificar que la conexión se ha establecido correctamente
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
