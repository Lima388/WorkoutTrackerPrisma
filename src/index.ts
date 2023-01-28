import express from 'express';
import dotenv from 'dotenv';
import setsRouter from './routers/sets-router.js';
import weeksRouter from './routers/weeks-router.js';
import exerciseRouter from './routers/exercises-router.js'
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(setsRouter);
app.use(weeksRouter);
app.use(exerciseRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server running in port: ${process.env.PORT}`)
);
