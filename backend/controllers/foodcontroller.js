import foodModel from "../models/foodmodel.js";
import fs from 'fs';

//add food item

const addfood = async (req, res) => {
    let image_filename =req.file?req.file.filename:"";

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food item added successfully"});
    } catch (error) {
        cosole.log(error);
        res.json({success:false,message:"Error while adding food item"});
    }

}


export { addfood };