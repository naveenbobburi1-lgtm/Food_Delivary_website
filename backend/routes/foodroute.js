import express from "express";
import {addfood} from "../controllers/foodcontroller.js";
import multer from "multer";

const foodrouter = express.Router();


//image upload configuration
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => { 
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodrouter.post('/add', addfood);











export default foodrouter;