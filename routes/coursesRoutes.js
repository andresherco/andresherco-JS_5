const express = require('express');
const mongoose = require('mongoose');  // Añadido para validación de ID
const Course = require('../models/coursesModel');

const router = express.Router();

// Rutas para courses

// 1. Seleccionar todos los cursos
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        if (courses.length) {
            res.status(200).json({
                success: true,
                data: courses
            });
        } else {
            res.status(404).json({
                success: false,
                msg: "No hay cursos disponibles"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado: ${error.message}`
        });
    }
});

// 2. Seleccionar un curso por ID
router.get('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({
                success: false,
                msg: "ID de curso inválido"
            });
        }
        const course = await Course.findById(courseId);
        if (!course) {
            res.status(404).json({
                success: false,
                msg: "Curso no encontrado"
            });
        } else {
            res.status(200).json({
                success: true,
                data: course
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado: ${error.message}`
        });
    }
});

// 3. Crear un nuevo curso
router.post('/', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json({
            success: true,
            data: newCourse
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado: ${error.message}`
        });
    }
});

// 4. Actualizar un curso por ID
router.put('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({
                success: false,
                msg: "ID de curso inválido"
            });
        }
        const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
        if (!updatedCourse) {
            res.status(404).json({
                success: false,
                msg: "Curso no encontrado"
            });
        } else {
            res.status(200).json({
                success: true,
                data: updatedCourse
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado: ${error.message}`
        });
    }
});

// 5. Borrar un curso por ID
router.delete('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            res.status(404).json({
                success: false,
                msg: "Curso no encontrado"
            });
        } else {
            res.status(200).json({
                success: true,
                msg: "Curso eliminado"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error encontrado: ${error.message}`
        });
    }
});

module.exports = router;