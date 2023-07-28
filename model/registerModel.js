import mongoose from "mongoose"

const registerSchema = new mongoose.Schema(
    {
        firstname : {
            type: String,
            required: true,
            trim: true,
        },
        lastname : {
            type: String,
            required: true,
            trim: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        country:{
            type: String,
            required: true,
        },
        state:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        gender:{
            type:String,
            required: true,
        },
        DOB:{
            type: String,
            required: true,
        },
        Age:{
            type:Number,
            required: true,
        }
    }
)

export default mongoose.model("Register",registerSchema)