const express=require ("express")
const app =express();
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")  //__dirname set the current directory
})


app.post("/signup",(req,res)=>{
    let {username,useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
})


app.listen(1234,()=>{
    console.log("Server started on port number 1234");
})