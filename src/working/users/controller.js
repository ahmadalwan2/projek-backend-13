const {Users} = require("../../interface/db/models/index.js");
const {resSukses, resError} = require("../payload/payload.js");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {
    allUsers,
    byIdUsers,
    createUser,
    deleteUser,
    cariEmail,
    updateUserById
} = require("./service.js");

const semuaUser = async(req, res) => {
    try {
        const data= await allUsers();
        return resSukses(res, 200, "success", "Data User", data)
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
}

const byIdUser = async(req, res) => {
    try {
        const {id} = req.params;
        const data = await byIdUsers(id);
        return resSukses(res,200, "success", "Data berdasarkan Id", data);

    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
}

const buatUser = async(req, res) => {
    try {
        const {nama, email, password, roleId} = req.body;
        const hashed = await bcrypt.hash(password, 15)
        const result = await createUser({
            nama, email, password : hashed, roleId
        })
        return resSukses(res,200, "success", "User berhasil di buat", result);
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await cariEmail(email);
    if (!user) {
      return resError(res, 404, "error", "Email tidak terdaftar");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return resError(res, 401, "error", "Password salah");
    }


    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        roleId: user.roleId
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return resSukses(res, 200, "success", "Login berhasil",token );

  } catch (error) {
    return resError(res, 500, "error", error.message);
  }
};


const hapusUser = async(req, res) => {
    try {
        const { id } = req.params;

        const result = await deleteUser(id);

        return resSukses(res, 200, "success", "User berhasil dihapus");
    } catch (error) {
         return resError(res, 500, "error", error.message);
    }
}


const updateUser = async(req, res) => {
    try {
        const {id}  = req.params;
        const {nama,email,roleId} = req.body;

        const body = {nama,email,roleId};
        const result = await updateUserById(id, body);
        return resSukses(res, 200, "success", "Data berhasil di ubah", result)
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
}
module.exports = {
    semuaUser,
    byIdUser,
    buatUser,
    login,
    hapusUser,
    updateUser
}