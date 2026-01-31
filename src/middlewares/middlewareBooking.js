const { resError } = require("../working/payload/payload.js");
const db = require("../interface/db/models/index.js");

const cekId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const BookingModel = db.Booking || db.booking;
        if (!BookingModel) {
            return resError(res, 500, "error", "Model Booking tidak ditemukan");
        };
        const data = await BookingModel.findByPk(id);

        if (!data) {
            return resError(res, 404, "error", "Data tidak ditemukan");
        };
        next();
    } catch (error) {
        return resError(res, 500, "error", "Terjadi kesalahan : " + error.message);
    }
};

module.exports = {
    cekId,
};