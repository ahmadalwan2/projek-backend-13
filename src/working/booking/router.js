const express = require('express');
const router = express.Router();
const {
    getAllBooking,
    getByIdBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require("./controller.js");

router.get("/", getAllBooking);
router.get("/cari/:id", getByIdBooking);
router.post("/tambah", createBooking);
router.put("/ubah/:id", updateBooking);
router.delete("/hapus/:id", deleteBooking);

module.exports = router;