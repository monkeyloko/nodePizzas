import Pizza from '../models/pizza.js';
import sql from 'mssql';
import configDB from '../models/db.js';

export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas')

    console.log(results);
    return results;
}
export const getById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId",id).query('SELECT * FROM Pizzas WHERE id = @pId')
    
    console.log(results);
    return results;
    
}
export const createPizza = async (pizza) =>{

    const conn = await sql.connect(configDB);
    const results = await conn.request()
    .input("pNombre", pizza.nombre)
    .input("pLibreDeGluten", pizza.libreDeGluten)
    .input("pImporte", pizza.precio)
    .input("pDescripcion", pizza.descripcion)
    .query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreDeGluten, @pImporte, @pDescripcion)');
    return results;

}
export const updatePizza = async (pizza, id) =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request()
    .input("pId",id)
    .input("pNombre", pizza.nombre)
    .input("pLibreDeGluten", pizza.libreDeGluten)
    .input("pImporte", pizza.precio)
    .input("pDescripcion", pizza.descripcion)
    .query('UPDATE Pizzas SET Nombre = @pNombre, LibreGluten = @pLibreDeGluten, Importe = @pImporte, Descripcion = @pDescripcion WHERE Id = @pId');
    if(results)
    return results;
}
export const deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId",id).query('DELETE FROM Pizzas WHERE id = @pId')

    console.log(results);
}
