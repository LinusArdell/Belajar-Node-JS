const hello = {
    mahasiswa : (text) => {                  // Function cara pertama
        console.log("Ini hello function Mahasiswa dengan key mahasiswa");
    },
    dosen : function () {                   // Function cara kedua
        console.log("Ini hello function dosen dengan key dosen");
    }
}

module.exports = hello //Untuk memanggil const hello

// Activate nodemon app Set-ExecutionPolicy RemoteSigned -Scope CurrentUser