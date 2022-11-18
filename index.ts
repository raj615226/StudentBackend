import cors from 'cors';
import dotenv from 'dotenv';
import express,{Express,Request,Response}from 'express';
import stdrouter from './Router/studentRouter';


dotenv.config();
const app:Express=express();
app.use(express.json());
//other imports
app.use(
  cors({
    origin:"*",
  })
);
app.use(stdrouter)

app.get('/', (req: Request, res: Response) =>{
    res.send('Express + TypeScript Server');
  });

const port = process.env.PORT || 4000;
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });