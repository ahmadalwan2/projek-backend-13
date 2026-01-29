const express= require('express');
const router = express.Router();
const {
    semuaRole,
    byId
} = require("./controller.js")

router.get("/",semuaRole );

module.exports = router