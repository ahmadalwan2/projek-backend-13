const db = require ("../../interface/db/models/index.js");
const {Payments} = db;

const tampilSemuaPayment = async () => {
    return await Payments.findAll();
};

const tampilIdPayment = async (id) => {
    return await Payments.findByPk(id);
};

const hapusPayment = async (id) => {
    return await Payments.destroy({
        where: {id}
    });
};

const buatPayment = async (body) => {
    return Payments.create(body);
};

module.exports = {tampilIdPayment, tampilSemuaPayment, hapusPayment, buatPayment};
