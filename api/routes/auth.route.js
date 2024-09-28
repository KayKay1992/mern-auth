import express from 'express';
import {signUp} from '../controllers/auth.controller.js';
import { signIn } from '../controllers/auth.controller.js';


const router = express.Router()

router.post('/signUp', signUp)
router.post('/signin', signIn)

export default router;