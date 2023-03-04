// import mongoose connection
import mongoose from "../connections/connections.js";

// Schema model mongoose connection
const { Schema, model } = mongoose;

// Student Schema
const projectSchema = new Schema({
    name: String,
    gender: String,
    enrollment: Number,
    address: String,
    phone: Number,
    linkedin: String,
    gpa: Number,
    absences: String,

}, {timestamps: true})

// Project model
const Project = model("Project", projectSchema)

export default Project;