const db =require("../../interface/db/models/index.js")
const {Users} = db

const allUsers = async() => {
    return await Users.findAll()
}

const byIdUsers = async(id) => {
    return await Users.findByPk(id)
}

const createUser = async(body) => {
    return await Users.create(body)
}

const deleteUser = async(id) => {
    return await Users.destroy(id)
}