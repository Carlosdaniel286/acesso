import {  Router } from "express";
import * as homer from '../controller/login'
import * as Post from '../controller/publications'
import * as User from '../controller/creatUser'
import * as comments from '../controller/visitor'
import * as visitors from '../controller/getVisitor'
import { authMiddleware } from "../middleware/authmiddleware";
export const router = Router()

router.post('/',User.creatUsers)
router.post('/login',homer.signIn)
router.get('/getvisitors',visitors.getVisitors)
router.post('/visitors',comments.Visitors)


module.exports = router;