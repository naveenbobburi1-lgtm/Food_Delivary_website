import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodrouter from './routes/foodroute.js';


//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//db connection
connectDB(); 


//api endpoints
app.use('/api/food', foodrouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});