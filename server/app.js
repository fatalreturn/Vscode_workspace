


const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');


app.use(cors());

app.get('/helloWorld', (req, res) => {
    const client = new Client({
        user : 'postgres',
        host : 'localhost',
        database : 'Test_202304_3',
        password : 'hr',
        port : 5432
    })
    client.connect()
    .then(() => console.log("Connected!!"))
    .catch(e => console.log(e.message))

    client.query('select * from public.test',(err, res1) => {
        res.send(res1.rows)
    })

//     client.query('select * from public.test')
//         .then((res) => {
//             console.log(res.rows) // ['brianc']
//         })
//         .catch((e) => {
//             console.error(e.stack)
//   })

    // res.send("helloWorld succeeded!!");
})

app.listen(3000, () => console.log("connected on port 3000"));