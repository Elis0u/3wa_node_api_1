import express from "express";
import driversRouter from "./routes/drivers.js"; 

const port = 8080


const app = express();
app.use(express.json());

app.use('/', driversRouter);


app.listen(port, () => {
    console.log('Listening on port ' + port)
})