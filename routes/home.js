module.exports = function (router) {

    var homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        var connectionString = process.env.TOKEN;
        res.send('Server is running perfectly!').json({ message: 'My connection string is ' + connectionString });
    });

    return router;
}
