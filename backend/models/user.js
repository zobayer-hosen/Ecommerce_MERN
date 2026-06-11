import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true    

    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true// This will automatically add createdAt and updatedAt fields to the schema
})

export default mongoose.model("User", userSchema)