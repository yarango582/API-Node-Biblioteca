import {Libros} from "../models";


export const createBook = async (req, res) => {

    const datos = req.body;

    try {

        const result = await Libros.create(datos);

        result?res.status(201).json({message:"Libro creado"}):res.status(201).json({message:"Llena los campos"});
        
    } catch (error) {
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        })
    }

}

export const listBooks = async (req, res) => {

    try {
        
        const results = await Libros.findAll();
        
        results?res.status(200).json(results):res.status(401).json({message: "algo salio mal"}); 
   
    } catch (error) {
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        });
    }
}

export const updateBook = async (req, res) => {

    const data = req.body;

    try {

        const [results] = await Libros.update(data,{where:{isbn: data.isbn}});

        results?res.status(201).json({message:"Actualizado"}):res.status(401).json({message:"Revisa el codigo ISBN"});

    } catch (error) {
        res.status(400).json({message: "No se ha podido realizar la actualización"});
    }

}

export const deleteBook = async (req, res) => {

    const {isbn} = req.body;

    try {

        const results = await Libros.destroy({where: {isbn:isbn}});

        results?res.status(201).json({message:`Libro con codigo:${isbn}  eliminado`}):res.status(401).json({message:"No se encontró el codigo ISBN"});
        
    } catch (error) {
        res.status(400).json({message: "No se ha podido ejecutar la consulta"});
    }
}