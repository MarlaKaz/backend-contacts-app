import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import cardRoutes from './routes/cards.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/cards', cardRoutes);

// app.get('/cards',(req,res) => {
//     res.send('list of all cards')
// })

app.listen(4000, () => {
    console.log('running on port 4000')
})