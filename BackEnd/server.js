const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser') // Body Parser - allow you to parse the body

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Avoiding the CORS Error. A standard that allows the server to relax the same origin policy
const cors = require('cors'); 
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const mongoose = require('mongoose'); // Connecting to Mongoose
const e = require('express')

main().catch(err => console.log(err));

async function main() { // Connection string from MongoDB with username and password
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.kugj5io.mongodb.net/?retryWrites=true&w=majority'); 
}

const assessmentSchema = new mongoose.Schema({ // Defining my Book Schema 
    heading: String,
    module: String,
    overview: String,
    dueDate: String,
    percentageOfGrade: String
  });


const assessmentModel = mongoose.model('assessments', assessmentSchema); // Compiling the Schema into a model

app.post('/api/assessments', (req, res) => { // Post embeds data in the body of the http
    console.log(req.body); // Parse the body of the data posted up 
    assessmentModel.create({ // Use the book model and create a new document
        heading:req.body.heading,
        module:req.body.module,
        overview:req.body.overview,
        dueDate:req.body.dueDate,
        percentageOfGrade:req.body.percentageOfGrade 
    })  
    res.send('Assessment Added');
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/assessments', (req, res) => {
  assessmentModel.find((err,data)=>{ // Callback function. returns the first element in the array
    console.log(data);
    res.json(data);
})
})

app.put('/api/assessment/:id', (req,res) => { // HTTP put request to the specified path with specified callback function, complete overwrite
  console.log("Update "+req.params.id); // Identify as parameter using :
  
  assessmentModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data)=>{
    res.send(data); // sending back data
  }) // Replace all fields, complete overwrite of the data
})

app.get('/api/assessment/:id',(req,res)=>{ // Searching DB for id
    console.log(req.params.id); // Pulling param out of URL
    assessmentModel.findById(req.params.id,(error, data)=>{ // Find Document with unique id 
        res.json(data); // Sending back JSON
    })
})

app.delete('/api/assessment/:id', (req,res)=>{ // Listen for HTTP request, find book and delete
    console.log("Deleting Assessment with the ID: "+req.params.id)

    assessmentModel.deleteOne({_id:req.params.id}, (error,data)=>{ //Passing id and once deleted send back data/error
      res.send(data); // returning data
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})