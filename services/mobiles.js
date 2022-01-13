const express=require('express')
const mobiles=require('../database/mobiles.json')
const app=express()
app.get('/',(req,res)=>{
    res.status(300).json("Welcome to the mobiles database")
})

app.get('/mobi',(req,res)=>{
    res.status(300).json(mobiles)
})

app.get('/mobi/:catalog',(req,res)=>{
    const mobileName=req.params.mobileName
    const mobiDetails=mobiles.filter((mobile)=>{
           return mobile.name.toLowerCase()===mobileName.toLowerCase()
    })
    mobiDetails.length==0 ? res.status(404).send(`${mobileName} not found in database :(`) : res.status(200).send(mobiDetails)
})

module.exports.app=app
//
// const express=require('express')
// const fruits=require('../database/fruits.json')
// const app=express()
// app.get('/',(req,res)=>{
//     res.status(200).json("Welcome to the fruits database")
// })

// app.get('/fruits',(req,res)=>{
//     res.status(200).json(fruits)
// })

// app.get('/fruits/:fruitname',(req,res)=>{
//     const fruitName=req.params.fruitname
//     const fruitDetails=fruits.filter((fruit)=>{
//            return fruit.name.toLowerCase()===fruitName.toLowerCase()
//     })
//     fruitDetails.length==0 ? res.status(404).send(`${fruitName} not found in database :(`) : res.status(200).send(fruitDetails)
// })

// module.exports.app=app