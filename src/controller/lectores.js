import {Lectores} from "../models";

export const createReader = async (req, res) => {

    const datos = req.body;

    try {

        const verificaLector = await Lectores.findOne({where:{cc:datos.cc}});

        if(verificaLector){
            res.status(401).json({
                message: "Ya existe un usuario con el documento ingresado"
            })
        }else{

            const result = await Lectores.create(datos);
            result?res.status(201).json({message:"Lector creado"}):res.status(201).json({message:"Llena los campos"});
        }
        
    } catch (error) {
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        })
    }

}

export const listReaders = async (req, res) => {

    try {
        
        const results = await Lectores.findAll();
        
        results?res.status(200).json(results):res.status(401).json({message: "algo salio mal"}); 
   
    } catch (error) {
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        });
    }
}

export const updateReader = async (req, res) => {

    const data = req.body;

    try {

        const [results] = await Lectores.update(data,{where:{cc:data.cc}});

        results?res.status(201).json({message:"Actualizado"}):res.status(401).json({message:"Revisa el numero de documento"});

    } catch (error) {
        res.status(400).json({message: "No se ha podido realizar la actualización"});
    }

}

export const deleteReader = async (req, res) => {

    const {cc} = req.body;

    try {

        const results = await Lectores.destroy({where: {cc:cc}});

        results?res.status(201).json({message:`Lector con codigo:${cc}  eliminado`}):res.status(401).json({message:"No se encontró el numero de documento"});
        
    } catch (error) {
        res.status(400).json({message: "No se ha podido ejecutar la consulta"});
    }
}