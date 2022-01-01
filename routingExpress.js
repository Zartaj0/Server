const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs')


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/contact',function (req,res) {

  res.render('contact',{qs:req.query})
})

app.post('/contact',urlencodedParser,function (req,res) {
  console.log(req.body);

})


app.get('/',function (req,res) {
  res.render('index')
})
app.get('/about',function (req,res) {
  res.render('about')
})
app.get('/profile/:id' , function (req,res) {
  var data= {age: 19, job: 'coder',  hobbies:['singing','football', 'reading'] }
  res.render('profile',{person:req.params.id, data:data})
});

app.listen(3000);
