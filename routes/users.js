const User = require('../models/user');

module.exports = function (router) {

    var userRoute = router.route('/users');
    var userID = router.route('/users/:id');

    userRoute.get(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            const allUser = await User.find({});
            res.status(200).json({message: "OK", data: allUser});
        } catch (error) {
            res.status(400).json({ message: error.message, data: {} });
        }
    });
    userRoute.post(async function (req, res) {
        try {
            const {name, email} = req.body;
            const newUser = new User({
                name: name,
                email: email
            });

            await newUser.save();

            res.status(201).json({
                message: "OK",
                data: {
                    _id: newUser.id,
                    email: newUser.email,
                    name: newUser.name,
                    dateCreated: newUser.dateCreated
                }
            });
        } catch (error) {
            res.status(500).json({ message: error.message, data: {} });
        }
    });

    userID.get(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(200);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

    userID.put(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            res.status(200);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    });

    userID.delete(async function (req, res) {
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