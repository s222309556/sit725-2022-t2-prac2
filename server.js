var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1+num2;
    return result; 
}

app.get('/', (req,res)=>{
    res.render('index.html');
})

app.get("/addTwoNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1, number2)
    res.json({statusCode: 200, data: result, message:'Success'})
})


var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("App listening to: "+port)
})