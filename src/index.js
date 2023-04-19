import Pizza from './models/pizza.js';
import {getAll, getById, deleteById, updatePizza, createPizza } from './services/pizzaService.js';
import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

//await getAll();
//await getById(3);   

//await updatePizza(pizza,12);

/*app.get('/api',  async (req, res)=> {
    const getA = await getAll();
    if (getA == null) {
        res.status(400).send(getA);
    } else{
        res.status(200).send(getA)
    }

    
});

app.get('/api/:id',  async (req, res)=> {
    const id = req.params.id;
    const getBI = await getById(id);
    res.send(getBI);
    
});
*/
app.post('/api/create', async (req, res)=>{
   

    const pizza = new Pizza();
    pizza.nombre = req.body.Nombre;
    pizza.libreGluten = req.body.LibreGluten;
    pizza.precio = req.body.Importe;
    pizza.descripcion = req.body.Descripcion

    const createP = await createPizza(pizza);
    res.send(createP); 
    
});


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
});