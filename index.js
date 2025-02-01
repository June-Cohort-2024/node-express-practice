const express = require('express')
const app = express()
app.use(express.json())
const db = require('./cn.js')

app.get('/people', async (req, res)=>{

    // select operation
    
    const sql = `select * from people`
    const result = await db.default.query(sql)
    res.json(result)

})

app.post('/people', async(req, res)=>{

    // insert operation 
    const sql =  `insert into people (name, last_name, age) values ($1, $2, $3)`
    const temp = req.body
    const arrParams = [ temp.name, temp.last_name, temp.age ]

    const result = await db.default.query(sql, arrParams)

    res.json({message:"Person Created"})

})

app.put('/people/:id', async (req, res) =>{

    // update operation
    const id_people = req.params.id
    const temp = req.body
    const arr = [ temp.name, temp.last_name, temp.age , id_people]

    const sql  = ` update people 
                    set name = $1, 
                        last_name = $2, 
                        age = $3
                    where id_people= $4`

   const resul = db.default.query(sql, arr)

    res.json({message:"Person Updated"})

})

app.delete('/people/:id', async(req, res)=>{

    // delete operation
    const id_people = req.params.id
    const sql = `delete from people where id_people = $1`
    const arr = [id_people]

    const resul = await db.default.query(sql, arr)

    res.json({message:"Person Deleted"})

})

app.get('/car', async(req, res)=>{

    const sql = `select * from cars`
    const result = await db.default.query(sql)
    res.json(result)

})

app.post('/car', async(req, res)=>{

    const sql = `insert into cars ( make, model , year) values ($1, $2, $3)`
    const temp = req.body
    const arr = [temp.make, temp.model, temp.year]
    const result = await db.default.query(sql, arr)
    res.json({message: "Car Created"})

})

app.put('/car/:id', async(req, res)=>{

    const id_car = req.params.id

    const sql = `update cars 
                    set make = $1, 
                        model = $2, 
                        year = $3
                where id_car = $4`
    const temp = req.body
    const arr = [temp.make, temp.model, temp.year, id_car]
    const result = await db.default.query(sql, arr)
    res.json({message: "Car Updated"})

})

app.delete('/car/:id', async(req,res)=>{

    const id_car = req.params.id
    const sql = `delete from cars where id_car = $1`
    const arr  = [id_car]
    const result = await db.default.query(sql, arr)
    res.json({message: "Car Deleted"})

})


app.listen(4000, ()=>{
    console.log("Project Online")
})
