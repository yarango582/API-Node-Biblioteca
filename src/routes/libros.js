import express from "express";

//controllers
import {
    listBooks, 
    createBook, 
    updateBook,
    deleteBook
} from "../controller/libros";

const router = express.Router();

router.post("/api/v1/createBook", createBook );
router.get("/api/v1/listBooks",  listBooks);
router.put("/api/v1/updateBook", updateBook );
router.delete("/api/v1/deleteBook", deleteBook );

export default router;