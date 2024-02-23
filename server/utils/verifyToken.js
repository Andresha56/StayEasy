import createError from 'http-errors';
import jwt from "jsonwebtoken";
export const authorization =(req,res,next)=>{
    const token = req.cookies.access_token;     
    if(!token){
        return next(createError(403,"you don't have permission to access this resource"));
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRATE );
        if(!data) return next(createError(403,"Invalid Token"));
        req.user = data;
        return next();
      } catch(e) {
        next(createError(500,"something went wrong!"))
      }
}