const express = require('express');
const router = express.Router();
const {
    semuaUser,
    byIdUser,
    buatUser,
    login,
    hapusUser,
    updateUser
} = require("./controller");

const {
    cekLogin,
    auth,
    isAdmin,
    cekRegister,
    cekId,
    cekRole
} = require("../../middlewares/middle.js")


router.get("/", auth, isAdmin, semuaUser);
router.get("/cari/:id", auth, isAdmin,cekId, byIdUser);
router.post("/tambah",cekRegister,cekRole, buatUser);
router.delete("/hapus/:id",auth, isAdmin,cekId, hapusUser);
router.patch("/edit/:id",auth,isAdmin,cekId,cekRole, updateUser);


router.post("/login", cekLogin, login);

module.exports = router;