import jwt from 'jsonwebtoken'
import ENV from '../../config.js'

export async function authenticate (req, res, next) {
 try {
    // access the authorize header
    const token =  req.headers.authorization.split(" ")[1];
    // retireve the user details
    const decodedToken =  jwt.verify(token, ENV.JWT_SECRET )
    req.user = decodedToken;
    next()
 } catch (error) {
    return res.status(401).json({error: error})
 }
}