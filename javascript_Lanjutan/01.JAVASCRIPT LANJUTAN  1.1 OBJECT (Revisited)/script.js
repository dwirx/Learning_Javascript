// Cara untuk membuat Object pada Javascript
// 1. Object Literal
let mahasiswa = {
    nama: 'Hendra Bangun',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat datag ${this.nama}, selamat makan!`);
    }

}

let mahasiswa = {
    nama: 'Dody',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat datag ${this.nama}, selamat makan!`);
    }

}


// 2. Function Declaration
// 3. Constructor Function
// 4. Object.create
