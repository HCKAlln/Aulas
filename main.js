const sqlite3 = require("sqlite3");
const express = require("express")
const app = express()

const client = new sqlite3.Database("./data/database.sqlite")

client.run('create table if not exists client (id integer primary key, name text)')

app.get("/" ,(req,res)=>{
    res.send(client.all('select * from users'))
})

app.get("/add", ()=>{
    client.run('insert into client (name) values (?)', ['Alice'])
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server on, port:${port}`)
})