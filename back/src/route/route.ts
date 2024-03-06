import { Router } from "express";
import * as homer from "../controller/login/login";
import * as User from "../controller/creatUser/creatUser";
import { authMiddleware } from "../middleware/authmiddleware";
import { Token } from "../controller/token/token";
import { handlePhoto } from "../controller/handlerPhoto/handlePhoto";
import { upload } from "../middleware/multer/handlerPhoto";
import { handleCache } from "../controller/handeControll/handleControlCache";
import { handleExitVistor } from "../controller/handleVistorExit/handleVistorExit";
import { Vistors_Inside } from "../controller/getInsides/inside";
import { getVistorsAddress } from "../controller/getVistorAddress/getVistorAddress";
import { fillterVistors } from "../controller/filterVistors/fillter";
import { getVisitors } from "../controller/getVistors/getVisitor";
import { handleEntersVisitor } from "../controller/handleVistorEnter/handleEnters";
import { handleCreateVisitor } from "../controller/creatVistor/creatVistors";

export const router = Router();
router.post("/", upload.single("photo"), User.creatUsers);
router.post("/login", homer.signIn);
router.post("/photo", upload.single("photo"), handlePhoto);
router.get("/token", authMiddleware, Token);
router.post("/visitorsExit", authMiddleware, handleExitVistor);
router.get("/Vistors_inside", authMiddleware, Vistors_Inside);
router.get("/address/inside/:id", authMiddleware, getVistorsAddress);
router.get("/filltervisitor", authMiddleware, fillterVistors);
router.get("/getvisitor", authMiddleware, getVisitors);
router.post("/visitorsEnter", authMiddleware, handleEntersVisitor);
router.post("/creatVisitors",authMiddleware,upload.single("photo"),handleCreateVisitor);
//"creatVisitors"
//creatVisitors

module.exports = router;
