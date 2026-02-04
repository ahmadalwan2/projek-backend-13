const express = require ("express");
const {getAllPayments, getById, createPayment, deletePayments} = require ("./controller.js");
const cekId = require ("./middleware.js");
const {  
  auth,
  isAdmin} = require("../../middlewares/middle.js");
const router = express.Router();

router.get("/",auth, isAdmin, getAllPayments);
router.get("/find/:id",auth,isAdmin, cekId, getById);
router.post("/create", createPayment);
router.delete("/delete/:id",auth, isAdmin, cekId, deletePayments);

module.exports = router;