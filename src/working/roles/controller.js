const { Roles } = require("../../interface/db/models/index.js");
const { resSukses, resError } = require("../payload/payload.js")
const {
    allRoles,
    byIdRoles
} = require("./service.js");

const semuaRole = async (req, res) => {
    try {
        const data = await allRoles();
        return resSukses(res, 200, "success", "Data Role", data)
    } catch (error) {
        return resError(res, 500, "error", error.message)
    }
}

const byId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await byIdRoles(id);
        return resSukses(res, 200, "success", "Data Role berdasarkan Id", data)
    } catch (error) {
        return resError(res, 500, "error", error.message)
    }
}
module.exports = {
    semuaRole,
    byId
}