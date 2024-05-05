const express= require("express");
const app= express();
var users=[{
    name: 'John',
    kidnesys: [{
        healthy: false
    }] 

}]

app.use(express.json());

app.get("/",function(req,res){
    const johnkidnesys = users[0].kidnesys;
    const numberOfKidnesys = johnkidnesys.length ;
    let numberOfHelthykidnesys = 0;
     for(let i=0;i<johnkidnesys.length ;i++)
     {
        if (johnkidnesys[i].healthy) 
        {
            numberOfHelthykidnesys=numberOfHelthykidnesys+1;
        }
    }
    const numberOfUnHelthykidnesys = numberOfKidnesys-numberOfHelthykidnesys;
    res.json({
        numberOfKidnesys,
        numberOfHelthykidnesys,
         numberOfUnHelthykidnesys
     })
    })
    
 app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidnesys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
 })   

 app.put("/",function(req,res){
    for(let i=0;i<users[0].kidnesys.length;i++){
        users[0].kidnesys[i].healthy=true;
    }
    res.json({
        msg:"Done"
    });
 })

 app.delete("/",function(req,res){
    const newKidnesy=[];
    for(let i=0;i<users[0].kidnesys.length;i++)
        {
            if(users[0].kidnesys[i].healthy){
                newKidnesy.push({
                    healthy:true
                })
            }
        }
        users[0].kidnesys=newKidnesy
        res.json({
            msg:"done"
        })
 })
app.listen(3000);