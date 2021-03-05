import express from "express";

//controllers
import {
    createBookLend,
    listBorrowedBook
} from "../controller/prestamos";

const router = express.Router();

router.post("/api/v1/createBookLend", createBookLend);
router.get("/api/v1/listBorrowedBook", listBorrowedBook );

export default router;