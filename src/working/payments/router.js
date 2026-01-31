const express = require ("express");
const {getAllPayments, getById, createPayment, deletePayments} = require ("./controller.js");
const cekId = require ("./middleware.js");
const router = express.Router();

router.get("/", getAllPayments);
router.get("/find/:id", cekId, getById);
router.post("/create", createPayment);
router.delete("/delete/:id", cekId, deletePayments);

module.exports = router;