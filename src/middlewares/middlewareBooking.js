const { Booking } = require("../interface/db/models/index.js")
const { resError } = require("../working/payload/payload.js")

const cekId = async (req, res, next) => {
    const { id } = req.params;
    const data = await Users.findByPk(id);

    if (!data) {
        return resError(res, 404, "error", "Data tidak di  temukan")
    }
    next()
};

module.exports = { cekId };