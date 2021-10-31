const fetchuser=(req , res , next)=>{
    const token=req.header("name")
    if(!token){
        res.status(400).send({"error":"cannot find this user"})
    }
    try {
        // console.log(token)
        req.fluffy=token;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({"error":"Invalid user"})
    }
}

module.exports = fetchuser;