import express from "express";

//controllers

import {
    createReader,
    listReaders,
    updateReader,
    deleteReader
} from "../controller/lectores";

const router = express.Router();

router.post("/api/v1/createReader", createReader );
router.get("/api/v1/listReaders", listReaders );
router.put("/api/v1/updateReader", updateReader );
router.delete("/api/v1/deleteReader", deleteReader );

export default router;
