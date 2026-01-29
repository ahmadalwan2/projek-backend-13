const db =require("../../interface/db/models/index.js")
const {Roles} = db

const allRoles = async() => {
    return await Roles.findAll()
}

const byIdRoles = async(id) => {
    return await Roles.findByPk(id)
}
console.log(Roles);

module.exports = {
    allRoles,
    byIdRoles
}