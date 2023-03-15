// import mongoose connection
import mongoose from "../connections/connections.js";

// Schema model mongoose connection
const { Schema, model } = mongoose;

// Student Schema
const projectSchema = new Schema({
    projectName: String,
    location: String,
    numberOfWorkers: Number,
    manager: String,
    

}, {timestamps: true})

// Project model
const Project = model("Project", projectSchema)

export default Project;