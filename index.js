import express from "express"
const app = express();
const port = 8000;
let password = "123346"

app.use(express.json());

app.use((req,res,next) =>{
if (req.body.pass != password ) {
     return  res.status(400).send("Password does not match")
};
next();

});
app.post( "/",(req,res) =>{
    console.log(req.body);
   return  res.status(200).send({success:true})
})

// app.get("/" , (req,res) =>{
//     res.json({name:"hasib"})
//     // res.send({success:true})
// });

app.listen(port , () =>{
    console.log(`Server stard at ${port}`);
    
})