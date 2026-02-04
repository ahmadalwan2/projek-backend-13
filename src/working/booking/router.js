const express = require('express');
const router = express.Router();
const {
    getAllBooking,
    getByIdBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require("./controller.js");
const { cekId } = require("../../middlewares/middlewareBooking.js");

const {  
  auth,
  isAdmin,
  } = require("../../middlewares/middle.js");

router.get("/",auth, isAdmin, getAllBooking);
router.get("/cari/:id",auth, isAdmin, cekId, getByIdBooking);
router.post("/tambah", createBooking);
router.patch("/ubah/:id",auth, isAdmin, cekId, updateBooking);
router.delete("/hapus/:id",auth,isAdmin, cekId, deleteBooking);

module.exports = router;