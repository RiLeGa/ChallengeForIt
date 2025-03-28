require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const logger = require('morgan');

const corsOptions = {
    origin: "*", // Cambia "*" por un dominio específico en producción para mayor seguridad
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  };
  
  app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

/* necesraio para usar GET y POST */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* necesario para utilizar DELETE y PUT */
app.use(methodOverride('_method'));

app.use(logger('dev'));

const tasksRouter = require('./routes/tasks');

app.use('/api', tasksRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/tasks`);
});

module.exports = app;
