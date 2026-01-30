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

const deleteUser = async (id) => {
  const user = await Users.findByPk(id);

  await user.destroy();
  return user;
}

const cariEmail = async (email) => {
  return await Users.findOne({
    where: { email }
  });
}

const updateUserById = async (id, body) => {
  const user = await Users.findByPk(id);

  await user.update(body);
  return user;
}

module.exports = {
    allUsers,
    byIdUsers,
    createUser,
    deleteUser,
    cariEmail,
    updateUserById
}