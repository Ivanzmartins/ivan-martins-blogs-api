const express = require('express');

const loginRoutes = require('./routes/loginRoutes');

const userRouter = require('./routes/userRoutes');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
