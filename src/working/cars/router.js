const express = require ("express");
const { getAllCars, getById, deleteCars, createCars, updateCars } = require ("./controller.js");
const {cekId, upload, cekRegister, validateParams} = require ("./middleware.js");
const {  
  auth,
  isAdmin} = require("../../middlewares/middle.js");
const router = express.Router();

router.get("/",auth, isAdmin, getAllCars);
router.get("/cars/:id",auth, isAdmin, getById);
router.delete("/delete/:id",auth, isAdmin, cekId, deleteCars);
router.post("/create", upload.single("foto_mobil"),cekRegister, createCars)
router.patch("/cars/:id", upload.single("foto_mobil"),auth, isAdmin, cekId, cekRegister, updateCars);


module.exports = router;