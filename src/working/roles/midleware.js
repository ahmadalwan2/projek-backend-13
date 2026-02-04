const {resSukses, resError} = require ("../payload/payload.js");
const db = require ("../../interface/db/models/index.js");
const {Roles} = db;

const cekId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Roles.findByPk(id);

      if (!data) {
        return resError (res, 404, "error", "Tidak ada role tambahan");
      };

      req.data = data;
      next();
    } catch (error) {
      return resGagal (res, 500, "error", error.message);
    }
};

module.exports = {cekId}