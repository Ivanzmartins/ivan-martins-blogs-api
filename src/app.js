const express = require('express');

const loginRoutes = require('./routes/loginRoutes');

const userRouter = require('./routes/userRoutes');

const categoryRouter = require('./routes/categoryRoutes');

// const postRouter = require('./routes/postRoutes');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

// app.use('/post', postRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
