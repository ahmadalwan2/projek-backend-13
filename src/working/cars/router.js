const express = require ("express");
const { getAllCars, getById, deleteCars, createCars, updateCars } = require ("./controller.js");
const {cekId, upload} = require ("./middleware.js");
const router = express.Router();

router.get("/", getAllCars);
router.get("/cars/:id", getById);
router.delete("/delete/:id", cekId, deleteCars);
router.post("/create", upload.single("foto_mobil"), createCars)
router.patch("/cars/:id", upload.single("foto_mobil"), cekId, updateCars)

module.exports = router;