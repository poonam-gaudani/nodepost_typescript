import { Router } from 'express';
const router = Router();
import { signUp, login } from '../controllers/auth';
import { validate } from '../utils/validate';
import { signupValidation } from '../rules/auth';

router.post('/signup', validate(signupValidation), signUp);
router.post('/login', /*validate(login),*/ login);

export default router;