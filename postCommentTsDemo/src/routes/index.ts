import { Request, Response, Router } from "express";
import authRoute from "./auth";
const router = Router();

router.get('/', (req: Request, res: Response) => { res.send('Welcome to post-comment demo'); });
router.use('/auth', authRoute);

export default router;