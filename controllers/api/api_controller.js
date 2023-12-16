const Product = require('../../models/products')

//action to list all the available products
module.exports.listProducts = async function(req,res){
    try{
        //find all the products
        let products = await Product.find({})
        //If there are 0 products available
        if(products.length==0){
            return res.status(404).json({
                message:"No Products Found",
            })
        }
        //format the product array
        let finalProductsList = products.map((product,index)=>({
            id:product.id,
            name:product.name,
            quantity:product.quantity
        }))
        //return the json with status 200
        return res.status(200).json({
            message:"Available Product: ",
            data:{products:finalProductsList}
        })
    }catch(err){
        if(err){
            console.log(`Error in listing the products :  ${err}`)
            return;
        }
    }

}
//action to create a new product
module.exports.createProduct = async function(req,res){
    try{
        //create the product
        let product = await Product.create({
            id:req.query.id,
            name:req.query.name,
            quantity:req.query.quantity
        })
        return res.status(200).json({
            message:"Product Created",
            data:{
                product:{
                    id:product.id,
                    name:product.name,
                    quantity:product.quantity
                }
            }
        })
    }catch(err){
        if(err){
            console.log(`Error in listing the products :  ${err}`)
            return;
        }
    }
}
//action to delete a product
module.exports.deleteProduct = async function(req,res){
    try{
        //find the product according to the id in the params & delete it
        let product = await Product.findOneAndDelete({id:req.params.id})
        return res.status(200).json({
            message:"Product Deleted"
        })
    }catch(err){
        if(err){
            console.log(`Error in listing the products :  ${err}`)
            return;
        }
    }
}

//action to update the quantity of a product
module.exports.updateProduct = async function(req,res){
    try{
        const number = req.query.number;
        //find the product
        let product = await Product.findOne({id:req.params.id})
        //set the updated quantity & store it in a variable
        const updatedQuantity = +product.quantity + +number;
        //update the product quantity with the updated quantity
        await Product.updateOne({id:product.id}, {quantity:updatedQuantity})
        return res.status(200).json({
            data:{
                message:"updated Successfully"
            }
        })
    }catch(err){
        if(err){
            console.log(`Error in listing the products :  ${err}`)
            return;
        }
    }
}