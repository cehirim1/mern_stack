const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'admin') {
        req.user = {name: 'admin', id:3};
        next(); //always call next when using the middleware
    } else {
        res.status(401).send('Unauthorized');
   }

};

module.exports = authorize;
//in the condition above, you can check for the json web token and if it exists in the database, it will be authorized for access