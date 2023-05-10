import jwt from 'jsonwebtoken';
const verifyToken =(token: string)=>{
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
       return decoded
    } catch (error) {
        console.log(error);
    }
}
export default verifyToken;