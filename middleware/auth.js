const axios = require("axios");
const validateLogin=async (req,res,next)=>{
    const response = await axios.post("http://localhost:8000/user/login",req.body);
    console.log(response.data)
    if(response.data.success){
        res.status(200).json({mess:"Login successfull"});
    }
    else
    {
        res.status(401).json({error:"Invalid credentials"});
    }
};

const validateOperations=async(req,res,next)=>{
    try
    {
        const response =await axios.get("http://localhost:8000/user/verify",
        {
            headers: 
            {
                authorization: req.headers.authorization
            }
        }
    );
    if(response.data.success){
        next();
    }
    }
    catch(err){
        res.status(401).json({error:"Invalid credentials"});
    }
};


module.exports = {validateLogin,validateOperations};