const mongoose = require('mongoose')

const BootcampsSchema = mongoose.Schema({
    name: {
        type: String,
        required:  [ true, 
            "el nombre es requerido"],
         unique: true,
         maxlength: [ 20, "nombre de bootcamp no mayor a 50 caracteres"],
    },
    phone: {
        type: Number,
        maxlength: [ 10, "telefono de bootcamp no mayor a 10 caracteres"],
    },
    address: {
        type: String,
        maxlength: [ 100, "direccion de bootcamp no mayor a 100 caracteres"],
        required:  [ true, 
            "la direccion es requerida"],
    },
    topics: {
        type: [ String ],
        required:  [ true, 
            "temas son requeridos"],
        enum: [ "Frontend", "Backend", "AI", "DevOps" ]
    },
    averageRating: Number,
    createAt: Date
})
module. exports = mongoose.model('Bootcamp' , BootcampsSchema)