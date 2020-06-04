const jwt= require('jsonwebtoken');

function authenticateToken(req, res, next){
    // Get token
    const authHeader= req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    // if token is undefined send a error to client
    if (token == null) return res.sendStatus(401);
    
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user= user;
       return next();
    });
}

function authenticateAdmin(req, res, next){
    if(req.user.role !== 'ADMIN') 
        return res.sendStatus(403);
    return next();
}

module.exports= {authenticateToken, authenticateAdmin};