const express=require ("express")
const app =express();
//middleware to parse urlencoded data
app.use(express.urlencoded({extended:true}))
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")  //__dirname set the current directory
})

let userData=[];
app.post("/signup",(req,res)=>{
    let {username,useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    console.log(username,useremail,userpassword)
    res.send(userData);
})


app.listen(1234,()=>{
    console.log("Server started on port number 1234");
})