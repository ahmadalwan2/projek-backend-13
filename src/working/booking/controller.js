const {
    tampilBooking,
    tambahBooking,
    cariIdBooking,
    ubahBooking,
    hapusBooking
} = require("./service.js")
const { resSukses, resError } = require("../payload/payload.js")

const getAllBooking = async (req, res) => {
    try {
        const data = await tampilBooking();
        return resSukses(res, 200, "success", "Data Booking", data)
    } catch (error) {
        return resError(res, 500, "error", error.message)
    }
};

const getByIdBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await cariIdBooking(id);
        return resSukses(res, 200, "success", "Dara booking berdasarkan Id", data)
    } catch (error) {
        return resError(res, 500, "error", error.message)
    }
};

const createBooking = async (req, res) => {
    try {
        const { userId, carId, tgl_booking, status } = req.body;
        const body = { userId, carId, tgl_booking, status };
        const data = await tambahBooking(body);
        return resSukses(res, 201, "Success", "Booking berhasil ditambahkan ", data);
    } catch (error) {
        return resError(res, 400, "Gagal menambah booking", error.message);
    }
};

const updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const { userId, carId, tgl_booking, status } = req.body;
        const body = { userId, carId, tgl_booking, status };

        const data = await ubahBooking(id, body);
        return resSukses(res, 200, "Success", "Booking berhasil diubah", data);
    } catch (error) {
        return resError(res, 400, "Gagal mengubah Booking", error.message);
    }
};

const deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await hapusBooking(id);

        if (result === 0) return resError(res, 404, "Not Found", "Booking gagal dihapus karena tidak ditemukan");

        return resSukses(res, 200, "Success", "Booking berhasil dihapus", null);
    } catch (error) {
        return resError(res, 500, "errorrr", error.message)

    }
};

module.exports = {
    getAllBooking,
    getByIdBooking,
    createBooking,
    updateBooking,
    deleteBooking
};