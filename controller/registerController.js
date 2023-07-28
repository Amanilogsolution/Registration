import registerModels from "../model/registerModel.js";

export const registerController = async(req,res) =>{
    try{
        const {firstname,lastname,email,country,state,city,gender,DOB,Age} = req.body.inputs
        console.log(firstname,lastname,email,country,state,city,gender,DOB,Age)

        // Validation
      
        // Existing User
    
        const user = await new registerModels({firstname,lastname,email,country,state,city,gender,DOB,Age}).save()
        res.status(201).send({
            success : true,
            message:'User Registration Success',
            user
        })
     }
    catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            message:'Error in Registeration',
            err
        })
    }
}
