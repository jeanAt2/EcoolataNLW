import express, { RouterOptions } from 'express';

const routes = express();

 routes.get('/', (req,res)=>{
    return res.json({message: 'Hello Jean Carlos'});
});

export default routes;