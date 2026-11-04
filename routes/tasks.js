const userschema = require('../models/user.js');

module.exports = function (router) {

    var taskRoute = router.route('/tasks');
    var taskID = router.route('/tasks/:id');

    taskRoute.get(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            const allUser = await User.find({});
            res.status(200).json(allUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
    taskRoute.post(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(201);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    taskID.get(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(200);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

    taskID.post(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(201);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    taskID.put(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(200);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

    taskID.delete(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(200);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

    return router;
}