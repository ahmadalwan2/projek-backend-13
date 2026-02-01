const db = require ("../../interface/db/models/index.js");
const {resSukses, resError} = require ("../payload/payload.js");
const {Payments} = db;

const cekId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Payments.findByPk(id);

      if (!data) {
        return resError (res, 404, "error", "Data id tidak ditemukan");
      };

      req.data = data;
      next();
    } catch (error) {
      return resGagal (res, 500, "error", error.message);
    }
};

module.exports = cekId;

