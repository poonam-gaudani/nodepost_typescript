import { Request, Response, NextFunction } from 'express';
import USER, { IUser, UserDocument } from "../model/user.model";
import ROLE, { RoleDocument } from '../model/role.model'
import { toObject, generateJwt, removeFields } from '../utils/helper';


export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let payload: IUser = req.body;
    const role = await ROLE.findOne({name: ('user')}, '_id') as RoleDocument;
    if(!role) return res.status(422).json({ message: "It seems that the system role are not generated yet." })
    payload.role = role._id;
    
    let user: UserDocument = await USER.create(payload)
    
    const body = { _id: user._id, firstName: user.firstName, email: user.email };
    const token: string = generateJwt({ user: body });
    user = toObject<UserDocument>(user);
    
    
    user.token = "Bearer " + token;
    return res.status(200).json({ data: removeFields(user, ['password','role']), message: "Signup done successfully." });
  }
  catch (err) { next(err) }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({message: "Login successfully"})
  // passport.authenticate('login', async (err, user, info) => {
  //    try {
  //      if (err || !user) throw new APIError({status: 401, message: err ? err.message : 'Unauthorized access'});
       
  //      req.login(user, { session: false }, async (err) => {
  //        if (err) throw new APIError();
  //        const body = { _id: user._id, firstName: user.firstName, email: user.email};
  //        const token = generateJwt({ user: body });
  //        user = toObject(user);
  //        user.token = "Bearer "+token;
  //        return res.sendJson(200, { data: user, message: info.message });
  //      });
  //    }
  //    catch (err) {
  //      next(err); }
  //  })(req, res, next);
};