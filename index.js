import express from "express"
const app = express();
const port = 8000;
let password = "123346"
app.use(express.json());
app.use((req,res,next) =>{
if (req.body.pass != password ) {
    res.send("Password does not match")
};
next();

});
app.post( "/",(req,res) =>{
    console.log(req.body);
    res.status(400).send({success:true})
})

// app.get("/" , (req,res) =>{
//     res.json({name:"hasib"})
//     // res.send({success:true})
// });

app.listen(port , () =>{
    console.log(`Server stard at ${port}`);
    
})