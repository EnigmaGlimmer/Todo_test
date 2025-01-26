import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRouter from "@/api/routes"
import configMongoDB from './config/database';

dotenv.config();
configMongoDB();
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', (_, res) => {
  res.send('Api is running');
});

app.use('/', apiRouter);

app.listen(port, () => {
  console.log(`Express is running on Port ${port}`)
})



