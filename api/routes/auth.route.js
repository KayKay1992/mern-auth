import express from 'express';
import {google, signUp} from '../controllers/auth.controller.js';
import { signIn, signOut } from '../controllers/auth.controller.js';


const router = express.Router()

router.post('/signUp', signUp)
router.post('/signin', signIn)
router.post('/google', google)
router.get('/signout', signOut)

export default router;