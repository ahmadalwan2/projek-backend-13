const db = require ("../../interface/db/models/index.js");
const {Cars} = db;

const tampilSemuaCars = async () => {
    return await Cars.findAll();
};

const tampilIdCars = async (id) => {
    return await Cars.findByPk(id);
};

const hapusCars = async (id) => {
    return await Cars.destroy({
        where: {id}
    });
};

const ubahCars = async (id, body) => {
    await Cars.update(body, { where: { id } 
    });
    return await Cars.findByPk(id)

};

const buatCars = async (body) => {
    return Cars.create(body);
};

module.exports = {tampilSemuaCars, tampilIdCars, hapusCars, ubahCars, buatCars};