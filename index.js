const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})


//to get specific id
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
}) 

app.get('api/posts/:year/:month',(req,res)=>{
    res.send(req.params);
});

//to set env variable (when we deploy a project into hosting environment ,the port is dynamically changes)to fix it,we use environment variable
const port=process.env.PORT || 4000;
app.listen(4000,()=>console.log(`listening on port ${port}...`));