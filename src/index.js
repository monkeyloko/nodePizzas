import Pizza from './models/pizza.js';
import {getAll, getById, deleteById, updatePizza, createPizza } from './services/pizzaService.js';
import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

//await getAll();
//await getById(3);   

//await updatePizza(pizza,12);

app.get('/api/getAll',  async (req, res)=> {
    const getA = await getAll();
    res.status(200).send(getA)
});

app.get('/api/getById/:id',  async (req, res)=> {
    const id = req.params.id;
    if(id < 1){
        res.status(400);
    }
    const getBI = await getById(id);
    if(getBI == null){
        res.status(404);
    }
    res.status(200).send(getBI);
});

app.post('/api/create', async (req, res)=>{
    const pizza = new Pizza();
    pizza.nombre = req.body.Nombre;
    pizza.libreGluten = req.body.LibreGluten;
    pizza.precio = req.body.Importe;
    pizza.descripcion = req.body.Descripcion
    const createP = await createPizza(pizza);
    res.status(201).send(createP); 
});

app.put('/api/update/:id', async (req, res)=>{
    const id = req.params.id;
    if(id != req.body.Id){
        res.status(400).send();
    }
    const pizza = new Pizza();
    pizza.nombre = req.body.Nombre;
    pizza.libreGluten = req.body.LibreGluten;
    pizza.precio = req.body.Importe;
    pizza.descripcion = req.body.Descripcion
    const update = await updatePizza(pizza, id);
    if(update.rowsAffected[0] == 0){
        res.status(404).send();
    }
    res.send(update); 
});

app.delete('/api/delete/:id',  async (req, res)=>{
    const id = req.params.id;
    if(id < 1){
        res.status(400).send();
    }
    const resDelete = await deleteById(id);
    console.log(resDelete);
    if(resDelete.rowsAffected[0] == 0){
        res.status(404).send()
    }
    res.status(200).send();
});

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
});