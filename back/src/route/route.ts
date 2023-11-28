import {  Router } from "express";
import * as homer from '../controller/login'
import * as Post from '../controller/publications'
import * as User from '../controller/creatUser'
import * as comments from '../controller/visitor'
import { authMiddleware } from "../middleware/authmiddleware";
export const router = Router()

router.post('/',User.creatUsers)
router.get('/login',homer.signIn)
//router.post('/post',authMiddleware,Post.publication)
router.post('/visitors',comments.Visitors)
//router.get('/feed',authMiddleware,Post.Feed)

module.exports = router;