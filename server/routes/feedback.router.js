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

router.post('/', (req, res) => {
    console.log('POST /feedback');
    const feedbackData = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(sqlText, [feedbackData.page1, feedbackData.page2, feedbackData.page3, feedbackData.page4, feedbackData.flag])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
})

module.exports = router;