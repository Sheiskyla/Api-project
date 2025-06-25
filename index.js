const express = require("express")
const app = express()

app.get("/signin", (req, res) =>{
    res.send("Hii This is my node Project kindly sign in")
})

// app.get("/dashboard", (req.res)=>{
    // res.send("Welcome to dashboard")
// })

let studentRecords = [
    {id: 1, studentName: "Paul", studentCourse: "Web development", studentLevel: "Level 2"},
    {id: 2, studentName: "Josh", studentCourse: "Web development", studentLevel: "Level 5"},
    {id: 3, studentName: "Lame", studentCourse: "Web development", studentLevel: "Level 2"},
    {id: 4, studentName: "Shem", studentCourse: "Designing", studentLevel: "Level 3"},
    {id: 5, studentName: "Dimmy", studentCourse: "Cyber Security", studentLevel: "Level 3"},
]

app.get("/students", (req,res) =>{
    res.send(studentRecords)
})

const port = 3000

app.listen(port, () =>{
    console.log(`Server is running on https:localhost:${port}`);
    
})
// const express =require('express');
// const app =express();
// const port = 5555
// const home ="/"
// const htmlPage ="/html"

// const allStudents=[
//     {name:'Adeola', age:20, course:'Computer Science'},
//     {name:'Victoria', age:21, course:'Cyber Securirty'}
// ] 
// app.get('/api',(req,res)=>{
//     try{
//         res.status(201).json({message:allStudents})
//     } catch(error){
//         res.status(503).json({message:error})
//     }
// })

// app.get(home,(request,response)=>{
// console.log('/has been accesed');
// response.send('Hi, we can now take our cold zobo')
// })

// app.get(htmlPage,(req, res)=>{
//     console.log('HTML page called for');
//     console.log(__dirname);
//     res.sendFile(`${__dirname}/index.html`)
// })







// app.listen(port,()=>{
//     console.log(`Server is ready at ${port}`);
// })