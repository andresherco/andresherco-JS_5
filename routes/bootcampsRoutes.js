const  express = require('express')
const moongose = require('mongoose')
const Bootcamp=
      require('../models/bootcampsModel')

//definir ruteador de bootcamp

const router = express.Router()

//utilizar el ruteador
//para crear las rutas 

//uri de bootcamps

//1. seleccionar todos los bootcamps
router.get(('/'),
         async (req , res) => {

            //traer los bootcamps en bd
            const bootcamps = 
                await Bootcamp.find()

            //Escenario: no hay bootcamps en mongo
            if(bootcamps.length){
                //hoy bootcamps en mongo
                res.
                status(200).
                json({
                    success: true,
                    data: bootcamps
                })
            }else{
                //no hay bootcamps
                res.
                status(404).
                json({
                    success: false,
                    msg: "No hay Bootcamps"
                })

            }
        })


//2. seleccionar el bootcamp cuyo id se pase por parametro
router.get('/:id' ,
         async(req , res) => {
             const bootcampId = req.params.id
             try{
                //Escensario: bootcampId sea invalido(1, a)
                if (!moongose.Types.ObjectId.isValid(bootcampId)) {
                    return res.status(500).json({
                        success: false,
                        msg: "Id Invalido"
                    })
                }else{
                    //consultar bootcamp por id
                    const bootcamp = await Bootcamp.findById(bootcampId)
                    if (!bootcamp){
                        //Si no hay bootcamp
                        res.status(404).json(
                            {
                            success: false,
                            msg: "Bootcamp no encontrado"
                            }
                        )
                    }else{
                        res.status(200).json(
                            {
                            success: true,
                            data: bootcamp
                            }
                        )
                    }
                }
             }catch(error){
                res.status(500).json({
                    success: false,
                    msg: `Error encontrado: ${error.message}`
                })
             }
        })  
        
//3. crear bootcamp 
router.post('/' ,
     async   (req , res) => {
        try {
            //guardar el bootcamp que viene en el body
            const newBootcamp = await Bootcamp.create(req.body)
            return res.status(201).json(
                {
                    success : true,
                    data: newBootcamp 
                }
            )
            
        } catch (error) {
            res.status(500).json({
                success : false,
                msg: `Error encotrado: ${error.message}`
            })
        }
        })     
        
//4. actualzar bootcamp por id
router.put('/:id' ,
        async (req , res) => {
            const bootcampId = req.params.id
             try{
                //Escensario: bootcampId sea invalido(1, a)
                if (!moongose.Types.ObjectId.isValid(bootcampId)) {
                    return res.status(500).json({
                        success: false,
                        msg: "Id Invalido"
                    })
                }else{
                    //consultar bootcamp por id
                    const bootcamp = await Bootcamp.findByIdAndUpdate(bootcampId, 
                                                                            req.body,
                                                                            {
                                                                                new: true
                                                                            })
                    if (!bootcamp){
                        //Si no hay bootcamp
                        res.status(404).json(
                            {
                            success: false,
                            msg: "Bootcamp no encontrado"
                            }
                        )
                    }else{
                        res.status(200).json(
                            {
                            success: true,
                            data: bootcamp
                            }
                        )
                    }
                }
             }catch(error){
                res.status(500).json({
                    success: false,
                    msg: `Error encontrado: ${error.message}`
                })
             }
        })      
        
//5. borrar bootcamp por id
router.delete('/:id' ,
        async(req , res) => {
            bootcampId = req.params.id
            await Bootcamp.findByIdAndDelete(bootcampId)
            return res.json(
                {
                    success : true,
                    data: [] 
                }
            )
        })  
        
module.exports = router        