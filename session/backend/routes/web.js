import express from "express";
import sessioncontroler from "../controller/sessioncontroler.js";

const router = express.Router();

router.get("/getsessioninfo",sessioncontroler.get_session_info);
router.get("/deletesession",sessioncontroler.delete_session);


export default router;