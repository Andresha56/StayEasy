import createError from 'http-errors';
import jwt from "jsonwebtoken";
export const authorization =(req,res,next)=>{
    const token = req.cookies.access_token;     
    if(!token){
        return next(createError(403,"you don't have permission to access this resource"));
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRATE );
        req.user = data;
        return next();
      } catch(e) {
        next(createError(403,"Invalid Token"));
      }
}

export const verifyUser = (req, res, next) => {
    authorization(req, res, (err) => {
        if (err) {
            // If there's an authorization error next
            console.log(err)
            return next(err);
        }
        console.log(req.user.id);
        //If user is authorised call next
        if (req.user.id === req.params.id) {
            next();
        } else {
            // If the id the invalid
            next(createError(400, "Invalid Id"));
        }
    });
};


export const verifyAdmin = (req, res, next) => {
    authorization(req, res, (err) => {
        if (err) {
            // If there's an authorization error next
            return next(err);
        }
        if (req.user.isAdmin) {
            next();
        } else {
            // If the user is not authorized
            next(createError(403, "Not authorized"));
        }
    });
};

