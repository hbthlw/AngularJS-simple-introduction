var express = require('express');
var router = express.Router();
var _ = require('underscore');

var users = [
    {name: 'li', age: 18},
    {name: 'wang', age: 38},
    {name: 'liu', age: 27}
];

router.get('/', function (req, res, next) {
    res.json(users);
});

router.post('/', function (req, res, next) {
    var user = req.body;
    users.push(user);
    res.send(user);
});

router.put('/:userId', function (req, res, next) {
    
    var name = req.params.userId;
    var age = req.body.age;

    _.each(users, function (e) {
        if (e.name === name) {
            e.age = age;
        }
    });

    res.end();
});

router.delete('/:userId', function (req, res, next) {

    var name = req.params.userId;

    users = _.reject(users, function (e) {
        return e.name === name;
    });

    res.end();
});
module.exports = router;
