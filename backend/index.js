import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js'; // .jsをつけることで、モジュールとして認識される
import authRoute from './routes/auth.route.js';

// この記述だけで.envファイルを読み込むことができる
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/auth', authRoute);

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
