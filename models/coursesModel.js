const mongoose = require('mongoose');

const CoursesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "el título es requerido"],
        maxlength: [30, "título no mayor a 30 caracteres"],
        minlength: [10, "título no menor a 10 caracteres"]
    },
    description: {
        type: String,
        required: [true, "la descripción es requerida"],
        minlength: [10, "descripción no menor a 10 caracteres"]
    },
    weeks: {
        type: Number,
        required: [true, "el número de semanas es requerido"],
        max: [9, "el número máximo de semanas para un curso es 9"]
    },
    enroll_cost: {
        type: Number,
        required: [true, "el costo de inscripción es requerido"]
    },
    minimum_skill: {
        type: String,
        required: [true, "la habilidad mínima es requerida"],
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"]
    }
});

module.exports = mongoose.model('Course', CoursesSchema);