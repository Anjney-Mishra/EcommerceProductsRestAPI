const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"Hits getAllProducts Route"});
}

module.exports = {getAllProducts}