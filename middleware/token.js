const token=async(req,res,next)=>{
    var dat= req.body.token;
    console.log(dat)
    res.locals.user=dat
    next();
}

module.exports = token;