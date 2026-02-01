// semua queri akan ada di sini
const db = require("../../interface/db/models/");
const { Booking } = db;

const tampilBooking = async () => {
    return await Booking.findAll()
    // return await Booking.findAll({
    //     include: [
    //         {
    //             model: Laporan,
    //             as: "daftar_laporan",
    //             attributes: ["id", "nama_pelapor", "status"]
    //         }
    //     ]
    // });
};

const tambahBooking = async (body) => {
    return await Booking.create(body);
};

const cariIdBooking = async (id) => {
    return await Booking.findByPk(id)
    // return await Booking.findByPk(id, {
    //     include: [
    //         {
    //             model: Laporan,
    //             as: "daftar_laporan",
    //             attributes: ["id", "nama_pelapor", "status"]
    //         }
    //     ]
    // });
};

const ubahBooking = async (id, body) => {
    const data = await Booking.findByPk(id);
    await data.update(body);
    return data;
};

const hapusBooking = async (id) => {
    return await Booking.destroy({
        where: { id: id }
    });
};

module.exports = {
    tampilBooking,
    tambahBooking,
    cariIdBooking,
    ubahBooking,
    hapusBooking
}