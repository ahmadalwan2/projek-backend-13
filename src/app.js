const express = require("express");
const sequelize = require("./infrasturcture/config/koneksi.js");
const routerRole = require("./working/roles/router.js")
const path = require("path")
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", async(req, res) => {
    try {
        await sequelize.authenticate();
        return res.json({message:"berhasil"})
    } catch (error) {
        return res.json({message:error.message})
    }
})
app.use("/api", express.static(path.join(__dirname, "uploads")));


app.use("/api/role", routerRole);
// app.use("/api/peminjaman", routerPeminjaman)
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});

