import express from 'express';
import cors from 'cors';


//app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});