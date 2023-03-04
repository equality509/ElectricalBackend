// Import express and bookmark model
import express from "express";
import Project from "../models/projects.js";

// Express router
const router = express.Router();

// Error handler
const catcher = (res) => (error) => res.status(400).json({error})

// "/project" - index route
router.get("/", async (req, res) => {
    const project = await Project.find({}).catch(catcher(res))
    res.json(project)
})

// "/project" - create route
router.post("/", async (req, res) => {
    const project = await Project.create(req.body).catch(catcher(res))
    res.json(project)
})  

// "/project/:id" - update route
router.put("/:id", async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
    res.json(project)
})    

// "/project/:id" - delete route
router.delete("/:id", async (req, res) => {
    const project = await Project.findByIdAndRemove(req.params.id).catch(catcher(res))
    res.json(project)
})   

// "/project/:id" - show route
router.get("/:id", async (req, res) => {
    const project = await Project.findById(req.params.id).catch(catcher(res))
    res.json(project)
})  

export default router;