const {tampilIdPayment, tampilSemuaPayment, hapusPayment, buatPayment} = require ("./service.js");
const {resSukses, resError} = require ("../payload/payload.js");

const getAllPayments = async (req, res) => {
    try {
        const data = await tampilSemuaPayment();
        return resSukses (res, 200, "success", "Data Payments berhasil ditampilkan", data);
    } catch (error) {
        return resError (res, 500, "error", error.message);
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await tampilIdPayment(id);
        if (!data) {
        return resError(res, 404, "error", "Data ID tidak ditemukan", data);
        }
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const createPayment = async (req, res) => {
    try {
        const id = req.body;
        const data = await tampilIdPayment(id);
        return resSukses(res, 201, "success", "Data Payment berhasil dibuat", data);   
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const deletePayments = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await hapusPayment(id);

        if (!data) {
        return resError(res, 404, "error", "Data ID tidak ditemukan", data);
        }
        return resSukses(res, 200, "success", "Data Payment berhasil dihapus", data);
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

module.exports = {getAllPayments, getById, createPayment, deletePayments};

