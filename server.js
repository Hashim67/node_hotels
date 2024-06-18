const express = require('express');
const app = express();
const db = require('./db');




const bodyParser = require('body-parser');
const _ = require('lodash');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to my hotel')
})









    const personRoutes = require('./routes/personRoutes');
    app.use('/person',personRoutes);

    const menuRoutes = require('./routes/menuRoutes');
    app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log('Server is on 3000')
})














// app.get('/chickens', function (req, res) {
//     res.send('Sure sir, i love chickens')
// })

// app.get('/daal', function (req, res) {
//     var cutomized_daal = {
//         name: "daal",
//         raita: true,
//         size: ['full plate', 'half plate'],
//         chawal: true
//     }
//     res.send(cutomized_daal)
// })


// //Object
// const objectToConvert = {
//     name: "Hashim Sandhu",
//     age: 23,
// }
// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);


// const jsonString = '{"name":"sandhu","age":"23","city":"gujranwala"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);













// const notes = require('./notes.js');
// var _ = require('lodash');

// console.log('server is available');

// var age = notes.age;
// var result = notes.addNumber(age+18, 10);
// console.log(age);
// console.log('Result for age: '+result);

// var data = ['hashim', 'sandhu', 'sajjad', 'sandhu', 1, 1, 3, 4, 5, 5];
// var filter = _.uniq(data);
// console.log(filter);











// console.log('My Project is Running');

// function add(a, b){
//     return a + b;
// }
// var result = add(10,15);
// console.log(result);

// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);
// console.log(user.uid);

// fs.appendFile('greeting.txt', 'Hashim Sandhu' + user.username + '! \n' , ()=>{
//     console.log('file is created')
// });
// console.log(os);
// console.log(fs);