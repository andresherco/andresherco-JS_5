const UserModel = require('../models/usersModel');
const  express = require('express')

//definir ruteador de bootcamp

const router = express.Router()


router.post('/register',async(req, res) => {
    try {
            const user = await UserModel.create(req.body)
            res.status(201).json({
                success: true,
                msg: 'Usuario creado correctamente',
                data: user
            })
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})

    }

})

router.post('/login',async (req, res) => {
    try {

        const {email, password} = req.body

    //Bucar el usuario
    //al que corresponda el email

        const user = await UserModel.findOne({email})
        if (!user) {
            res.status(401).json({success: false, msg: 'no existe el usuario'})
        }else {           
            const isMatch = await user.compararPassword(password)
            if (!isMatch) {
                res.status(401).json({success: false, msg: 'contraseña incorrecta'})
            }else {
                res.status(200).json({success: true, msg: 'haz ingresado con exito', data: user})
            }
            

        }
    } catch (error) {
        
    }

})


        
module.exports = router;         