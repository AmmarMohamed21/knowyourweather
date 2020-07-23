const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/apply', (req,res) => {
    res.render('apply');
})

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`listening at port ${port}`);
});
