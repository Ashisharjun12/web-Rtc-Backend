
const registerUser = async(req,res,next)=>{

    res.json({success:true , msg:"hello from register....."})

}


const loginUser = async(req,res,next)=>{
    res.json({success:true , msg:"hello from login..."})

}


const logoutUser = async(req,res,next)=>{
    res.json({success:true , msg:"hello from logout..."})
}

const resetpassword = async(req,res,next)=>{
    res.json({success:true , msg:"hello from reset password..."})
}

const forgotPassword = async(req,res,next)=>{
    res.json({success:true , msg:"hello from forgot password..."})
}

const verifyOtp = async(req,res,next)=>{
    res.json({success:true , msg:"hello from verify otp..."})
}

const changePassword = async(req,res,next)=>{
    res.json({success:true , msg:"hello from change password..."})
}

const avtarupload = async(req,res,next)=>{
    res.json({success:true , msg:"hello from avtar upload..."})
}








export {registerUser , loginUser ,  logoutUser,resetpassword ,forgotPassword ,verifyOtp ,changePassword , avtarupload}