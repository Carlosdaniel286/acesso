import {  Router } from "express";
import * as homer from '../controller/login'
import * as User from '../controller/creatUser'
import { authMiddleware } from "../middleware/authmiddleware";
import { Token } from "../controller/token";
import { handlePhoto } from "../controller/handlePhoto";
export const router = Router()

router.post('/',User.creatUsers)
router.post('/login',homer.signIn)
//router.post('/photo',handlePhoto)
router.get('/token',authMiddleware,Token)
module.exports = router;