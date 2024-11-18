var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
     
        penumpang.push(namaPenumpang);
        alert(namaPenumpang + ' telah ditambahkan sebagai penumpang pertama.');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                alert(namaPenumpang + ' telah ditambahkan ke kursi kosong.');   
                return penumpang;
            }
        
            else if (penumpang[i] == namaPenumpang) {
                alert(namaPenumpang + ' sudah ada di dalam kendaraan.');
                return penumpang;
            }
        
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                alert(namaPenumpang + ' telah ditambahkan ke kursi baru.');
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        alert('Tidak ada penumpang untuk dihapus.');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
        
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                alert(namaPenumpang + ' telah dihapus.');
                return penumpang;
            }
       
            else if (i == penumpang.length - 1) {
                alert(namaPenumpang + ' tidak ditemukan di dalam angkot.');
                return penumpang;
            }
        }
    }
};

var tampilkanPenumpang = function (penumpang) {
    if (penumpang.length == 0) {
        alert('Tidak ada penumpang di dalam angkot.');
    } else {
        var daftarPenumpang = penumpang
            .map((penumpang, index) => `${index + 1}. ${penumpang || 'Kosong'}`)
            .join('\n');
        alert('Daftar penumpang saat ini:\n' + daftarPenumpang);
    }
};


while (true) {
    var action = prompt(
        'AKSINYA (1.TAMBAH/2.HAPUS/3.PENUMPANG/4.KELUAR):'
    ).toLowerCase();
    if (action === '4') {
        alert('Terima kasih!');
        break;
    } else if (action === '1') {
        var nama = prompt('Masukkan nama penumpang:');
        if (nama) {
            tambahPenumpang(nama, penumpang);
        } else {
            alert('Nama tidak boleh kosong!');
        }
    } else if (action === '2') {
        var nama = prompt('Masukkan nama penumpang yang akan dihapus:');
        if (nama) {
            hapusPenumpang(nama, penumpang);
        } else {
            alert('Nama tidak boleh kosong!');
        }
    } else if (action === '3') {
        tampilkanPenumpang(penumpang);
    } else {
        alert('Aksi tidak dikenal!');
    }
}