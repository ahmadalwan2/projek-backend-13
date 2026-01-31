const express = require("express");
require("dotenv").config();
const sequelize = require("./infrasturcture/config/koneksi.js");
const routerUser = require("./working/users/router.js")
const routerRole = require("./working/roles/router.js")
const routerCar = require("./working/cars/router.js");
const routerPayment = require("./working/payments/router.js");


const path = require("path")
const app = express();
const PORT = 3000;

app.use(express.json());

// app.get("/", async (req, res) => {
//     try {
//         await sequelize.authenticate();
//         return res.json({ message: "db berhasil terkonek" })
//     } catch (error) {
//         return res.json({ message: error.message })
//     }
// })
app.use("/api", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));


app.use("/api/role", routerRole);
app.use("/api/user", routerUser)
app.use("/api/car", routerCar);
app.use("/api/payment", routerPayment);
// app.use("/api/peminjaman", routerPeminjaman)
app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});

