const {
  resError
} = require("../working/payload/payload.js");
const jwt = require("jsonwebtoken");
const { Users, Roles } = require("../interface/db/models/index.js")

const cekLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return resError(res, 400, "error", "Email dan password wajib diisi");
  }

  next();
};


const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token tidak ada" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.roleId !== 1) {
    return res.status(403).json({message: "Akses ditolak, khusus admin"});
  }
  next();
};

const cekRegister = (req, res, next) => {
  const { nama, email, password, roleId } = req.body;

  if (!nama || !email || !password || !roleId) {
    return resError(res, 400, "error", "Semua field wajib di isi");
  }

  next();
};

const cekId = async (req, res, next) => {
  const { id } = req.params;
  const data = await Users.findByPk(id);

  if (!data) {
    return resError(res, 404, "error", "Data tidak di  temukan")
  }
  next()
}

const cekRole = async (req, res, next) => {
  const { roleId } = req.body;
  const role = await Roles.findByPk(roleId);

  if (!role) {
    return resError(res, 400, "error", "Role tidak valid, pilih 1.(Admin) atau 2.(Customer)");
  }
  next();
};
module.exports = {
  cekLogin,
  auth,
  isAdmin,
  cekRegister,
  cekId,
  cekRole
}