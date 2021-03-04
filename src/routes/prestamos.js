import express from "express";

//controllers

const router = express.Router();

router.post("/api/v1/createBookLend", /*Controller*/ );
router.get("/api/v1/listBorrowedBook", /*Controller*/ );
router.put("/api/v1/updateBookBorrowed", /*Controller*/ );

export default router;