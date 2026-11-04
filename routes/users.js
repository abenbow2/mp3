module.exports = function (router) {

    var userRoute = router.route('/users');

    userRoute.get(async function (req, res) {
        // var connectionString = process.env.TOKEN;
        // res.json({ message: 'My connection string is ' + connectionString });
        try {
            const allUser = await User.find({});
            res.status(200).json(allUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    return router;
}