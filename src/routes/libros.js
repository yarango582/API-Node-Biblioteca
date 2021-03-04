import express from "express";

//import controllers

const router = express.Router();

router.post("/api/v1/createBook", /*Controller*/ );
router.get("/api/v1/listBooks", /*Controller*/ );
router.put("/api/v1/updateBook", /*Controller*/ );
router.delete("/api/v1/deleteBook", /*Controller*/ );

export default router;