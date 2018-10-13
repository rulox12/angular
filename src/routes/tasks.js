const router = require('express').Router();
/*const mongojs = require('mongojs');
const db = mongojs('mean-db',['tasks']);
*/
var mongojs = require('mongojs')
var db = mongojs('connectionString', ['tasks'])

router.get('/tasks', (req, res, next) => {
    db.tasks.find((err,tasks)=>{
        if (err) return next(err);
        res.json.tasks;
    });
});

module.exports = router;
