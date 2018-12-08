const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('GET /feedback', pool);
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post( (req, res) => {
    console.log('POST /feedback');
/////////////////////////////////////////////////////////////////////////////////
    // const newStudent = req.body.github_name;
    // const sqlText = `INSERT INTO students (github_name) VALUES ($1)`;

    // pool.query(sqlText, [newStudent])
    //     .then((result) => {
    //         res.sendStatus(201);
    //     })
    //     .catch((error) => {
    //         console.log(`Error making database query ${sqlText}`, error);
    //         res.sendStatus(500);
    //     });
/////////////////////////////////////////////////////////////////////////////////
    /////////////////////
})

module.exports = router;