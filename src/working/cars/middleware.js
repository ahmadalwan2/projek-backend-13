const multer = require("multer");
const {resSukses, resError} = require ("../payload/payload.js");
const db = require ("../../interface/db/models/index.js");
const {Cars} = db;

const dir = "src/uploads"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024} });

const cekId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Cars.findByPk(id);

      if (!data) {
        return resError (res, 404, "error", "Data id tidak ditemukan");
      };

      req.data = data;
      next();
    } catch (error) {
      return resError (res, 500, "error", error.message);
    }
};

const uploadMiddleware = (req, res, next) => {
  upload.single("foto_mobil")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return resError(res, 400, "error", "Ukuran file maksimal 2MB");
      }
      return resError(res, 400, "error", err.message);
    } else if (err) {
      return resError(res, 500, "error", err.message);
    }
    next();
  });
};


const cekRegister = (req, res, next) => {
  const { nama_mobil, harga_sewa} = req.body;

  if (!nama_mobil || !harga_sewa || !req.file) {
    return resError(res, 400, "error", "Semua field wajib di isi");
  }

  next();
};



module.exports = {cekId, cekRegister, uploadMiddleware};