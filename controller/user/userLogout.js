async function userLogout(req,res){
    try{
         const tokenOption = {
            httpOnly : true,
            secure:true,
            sameSite:"none"
        }
        res.clearCookie("token",tokenOption);
        res.json({
            message : "User logout successfully",
            error : false,
            success : true,
            data:[]
        })
    }catch(err){
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}

module.exports = {
    userLogout
}
