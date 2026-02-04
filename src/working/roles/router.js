const express = require('express');
const router = express.Router();
const {
    semuaRole,
    byId
} = require("./controller.js")

router.get("/", semuaRole);
router.get("/", semuaRole);
router.get("/cari/:id", byId);

module.exports = router