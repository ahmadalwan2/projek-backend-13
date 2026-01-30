const express = require('express');
const router = express.Router();
const {
    getAllBooking,
    getByIdBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require("./controller.js");
const { cekId } = require("../../middlewares/middlewareBooking.js")

router.get("/", getAllBooking);
router.get("/cari/:id", cekId, getByIdBooking);
router.post("/tambah", createBooking);
router.put("/ubah/:id", cekId, updateBooking);
router.delete("/hapus/:id", cekId, deleteBooking);

module.exports = router;