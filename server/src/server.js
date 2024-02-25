const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const tokensRouter = require('./routes/tokensRouter');
const authRouter = require('./routes/authRouter');
const vacansyRouter = require('./routes/vacansyRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

app.use('/tokens', tokensRouter);
app.use('/auth', authRouter);
app.use('/api', vacansyRouter);
app.use('/api/category', categoryRouter)
// app.use(express.static(path.join(__dirname, '..', 'dist')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
