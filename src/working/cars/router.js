const express = require ("express");
const { getAllCars, getById, deleteCars, createCars, updateCars } = require ("./controller.js");
const {cekId, cekRegister, uploadMiddleware} = require ("./middleware.js");
const {  
  auth,
  isAdmin} = require("../../middlewares/middle.js");
const router = express.Router();

router.get("/",auth, isAdmin, getAllCars);
router.get("/cars/:id",auth, isAdmin, getById);
router.delete("/delete/:id",auth, isAdmin, cekId, deleteCars);
router.post("/create", uploadMiddleware, cekRegister, createCars)
router.patch("/cars/:id", auth, isAdmin, cekId, uploadMiddleware, cekRegister, updateCars);


module.exports = router;