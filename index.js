import express from "express";
import driversRouter from "./routes/drivers.js";
import path from "path";
import bodyParser from "body-parser"

const port = 8080;
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const viewsDirectory = path.join(path.resolve(), 'views');

app.set('view engine', 'ejs');
app.set('views', viewsDirectory);

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/', driversRouter);

app.listen(port, () => {
    console.log('Listening on port ' + port);
});