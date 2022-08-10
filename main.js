const express = require('express');
const { appendFile } = require('fs');

const path = require('path');

const server = express();

server.set('view engine', 'ejs')

const people = [
    {name: 'Bob Smith', age: 39, height: 178},
    {name: 'Bob Dilan', age: 34, height: 198},
    {name: 'Kim Long', age: 45, height: 186},
    {name: 'Boby White', age: 23, height: 191}
];

server.get('/', (req, res) => {
    res.send('Homepage');
});

// виводить json на фронт
server.get('/api/people', (req, res) => {
    res.json(people);
});

server.get('/download', function(req,res){
   // res.sendFile(__dirname + "/123.jpg");
    const file = __dirname + '/123.jpg';
    res.download(file);
    res.setHeader('Content-desposition', 'attachment; filename=123.jpg');
    
});

server.get('/news/:id', (req, res) => {
    let obj = {title:"NEWS", id: 34, paragraphs:['Параграф', 'Звичайний текст', 
    'Числа:1,3,8,4', 99, ]};
   res.render('news', {newsId: req.params.id, newParam: 2244, obj: obj});
});


// static server

server.use(express.static(path.join(__dirname,'public')));

server.listen(3000);