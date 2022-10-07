const authorize = (req, res, next) => {
    const { user } = req.query;
    if( user === 'john') { // middleware, http://localhost:5000/?user=john = > Home, Query String 
        req.user = { name: 'john', id: 3};
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
} 
module.exports = authorize;