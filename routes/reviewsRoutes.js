const  express = require('express')

//definir ruteador de bootcamp

const router = express.Router()

//utilizar el ruteador
//para crear las rutas 

//1.Seleccionar todas las reseñas
router.get(('/'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "Seleccionar todas las reseñas"
            })
        })
//2.Seleccionar reseñas por id
router.get('/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando reseña cuyo id es: ${reviewId}` 
                }
            )
        })
//3.Crear una reseña
router.post('/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando reseña cuyo id es: ${reviewId}` 
                }
            )
        }) 
//4.Actualizar reseña por id
router.put('/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando reseña cuyo id es: ${reviewId}` 
                }
            )
        })
//5. Borrar reseña por id
router.delete('/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando reseña cuyo id es: ${reviewId}` 
                }
            )
        })
        
module.exports = router         