const {tampilSemuaCars, tampilIdCars, hapusCars, ubahCars, buatCars} = require ("./service.js");
const {resSukses, resError} = require ("../payload/payload.js");
const path = require ('path');
const fs = require ('fs');


const getAllCars = async (req, res) => {
    try {
        const data = await tampilSemuaCars();
        return resSukses(res, 200, "success", "Data Cars berhasil ditampilkan", data);
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await tampilIdCars(id);
        if (!data) {
            return resError(res, 404, "error", "Data ID tidak ditemukan", data);
        };
        return resSukses(res, 200, "success", "Data berdasarkan id berhasil ditampilkan");
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const deleteCars = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await tampilIdCars(id);

        if (!data) {
            return resError(res, 404, "error", "Data ID tidak ditemukan", data);
        };

        if (data.foto_mobil) {
            const filePath = path.join(__dirname, "../../uploads", data.foto_mobil);
            if (fs.existsSync(filePath))  {
                fs.unlinkSync(filePath);
            }
        }

        await hapusCars(id);

        return resSukses(res, 200, "success", "Data berhasil dihapus", data);
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const createCars = async (req, res) => {
    try {
        const { nama_mobil, harga_sewa } = req.body;

        let foto_mobil = null

        if (req.file) {
            foto_mobil = path.basename(req.file.path);
        };

        const body = { nama_mobil, harga_sewa, foto_mobil };
        const result = await buatCars(body);
        return resSukses(res, 201, "success", "Data berhasil ditambahkan", result)
    } catch (error) {
        return resError(res, 500, "error", error.message);
    }
};

const updateCars = async (req, res) => {
    try {
        const {id} = req.params;
        const { nama_mobil, harga_sewa } = req.body;

        const data = await tampilIdCars(id);
        if (!data) {
        return resError(res, 404, "error", "Data ID tidak ditemukan", null);
        };

        let foto_mobil = data.foto_mobil;

        if (req.file) {
            if (foto_mobil) {
                const fotoLama = path.join(__dirname, "../../uploads", foto_mobil);
            if (fs.existsSync(fotoLama))  {
                fs.unlinkSync(fotoLama);
            }
        };
        foto_mobil = path.basename(req.file.path);
        };

        const body = { nama_mobil, harga_sewa, foto_mobil };
        const result = await ubahCars(id, body);
        
        return resSukses(res, 200, "success", "Data berhasil diupdate", result)
    } catch (error) { 
        return resError(res, 500, "error", error.message);
    }
};

module.exports = { getAllCars, getById, deleteCars,  createCars, updateCars};