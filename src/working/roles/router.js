const express = require('express');
const router = express.Router();
const {
    semuaRole,
    byId
} = require("./controller.js")

const {cekId} = require("./midleware.js")

router.get("/", semuaRole);
router.get("/cari/:id",cekId, byId);

module.exports = router