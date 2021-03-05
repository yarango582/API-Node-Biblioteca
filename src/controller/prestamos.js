import {Prestamos, Lectores, Libros} from "../models";
import moment from "moment";

export const createBookLend = async (req, res) => {

    const {cc, isbn, dias} = req.body;

    try {
        
        const idLector = await Lectores.findOne({where:{cc:cc}});
        const idLibro = await Libros.findOne({where:{isbn:isbn}});
        
        const fechaInicialPrestamo = moment().format();//fecha de prestamo
        let cantidadDias = dias || 7; //cantidad de dias para el prestamo

        const fechaAdd = moment().add(cantidadDias, 'days'); //fecha final del prestamo sin formato
        const fechaFinalPrestamo = moment(fechaAdd).format(); //fecha final de prestamo con formato

        if(idLibro && idLector){

            const objPrestamo = {
                fechaPrestamo: fechaInicialPrestamo,
                idLibro: idLibro.id,
                idLector: idLector.id,
                fechaDevolucion: fechaFinalPrestamo
            }
            const results = await Prestamos.create(objPrestamo);
           
            if(results){
                res.status(201).json({
                    message:"Prestamo creado"
                });
            }else{
                res.status(401).json({
                    message:"No se logró crear el prestamo"
                });
            }
           

        }else{
            res.status(401).json({
                message: `Revisa que esten correctos
                el numero de documento y el codigo ISBN`
            });
        }
        
    } catch (error) {
        console.log("Error:" + error);
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        })
    }

}

export const listBorrowedBook = async (req, res) => {

    try {
        
        const results = await Lectores.findAll(
            {
                attributes: ['nombre', 'cc'],
                include: [{
                    model: Prestamos
                }],
                include: [{
                    model: Libros,
                    attributes: ['titulo','isbn']
                }],
                
            }
        );
        
        results?res.status(200).json(results):res.status(401).json({message: "algo salio mal"}); 
   
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error al ejecutar la consulta"
        });
    }
}
