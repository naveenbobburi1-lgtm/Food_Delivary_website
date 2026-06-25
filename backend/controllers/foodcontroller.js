import foodModel from "../models/foodmodel.js";
import fs from 'fs';

//add food item

const addfood = async (req, res) => {
    let image_filename = req.file ? req.file.filename : "";

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })
    console.log("Body:", req.body);
console.log("File:", req.file);
    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while adding food item" });
    }

}


export { addfood };