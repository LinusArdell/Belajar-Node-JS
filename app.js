console.log("belajar node js");

const halo = require(`./hello`) // Import modul hello.js

// Memanggil function pada modul hello.js dengan key (mahasiswa/dosen)
halo.mahasiswa()
halo.dosen()

// Memanggil modul yang sudah ada
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require(`url`);
const { fstat } = require('fs');

//Membuat server didalam Node variabel (req/res) dapat diubah
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('Halaman awal')
        res.end()
    }

    else if(req.url == '/about'){
        res.writeHead(200, {"Content-Type": "text/html"}) //
        res.write("<h2>About</h2><p>Ini halaman about</p>")
        res.end()
    }

    else if(req.url == '/contact'){
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.write("Halaman Index")
            res.end()
        })
    }
})

//Menentukan port
server.listen(5000, () => {
    console.log('Server berhasil')
})