import Pizza from './models/pizza.js';
import { createPizza, getAll, getById, deleteById, updatePizza } from './services/pizzaService.js';
import express from 'express';

const app = express();
const port = 3000;

//await getAll();
//await getById(3);   
const pizza = new Pizza();
pizza.nombre = 'lol';
pizza.descripcion = 'lol';
pizza.precio = 1000;
pizza.libreDeGluten = true;
//await updatePizza(pizza,12);

app.get('/',  async (req, res)=> {
    const getalled = await getAll();
    res.send(await getAll());
    
});
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
});