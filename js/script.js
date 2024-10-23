// Penggantian Nama
function replaceName () {
    let name =prompt("Halo, siapakah nama anda?",);
    document.getElementById("name").innerHTML = name;
    }
    
    replaceName();

// Validasi Form    
function validateForm() {
    const nama = document.forms ["message-form"] ["namaLengkap"].value;
    const tglLahir = document.forms ["message-form"] ["tglLahir"].value;
    const jenisKelamin = document.forms ["message-form"] ["jenisKelamin"].value;
    const pesan = document.forms ["message-form"] ["pesan"].value;

    if (nama == "" || tglLahir == "" || jenisKelamin == "" || pesan == "") {
        alert("Tidak boleh ada yang kosong, silahkan diisi");
        return false;
    }

    setSenderUI (nama, tglLahir, jenisKelamin, pesan);
    return false;
}

function setSenderUI(nama, tglLahir, jenisKelamin, pesan) {
    document.getElementById("sender-namaLengkap").innerHTML = nama;
    document.getElementById("sender-tglLahir").innerHTML = tglLahir;
    document.getElementById("sender-jenisKelamin").innerHTML = jenisKelamin;
    document.getElementById("sender-pesan").innerHTML = pesan;
}

//Banner Auto Slide
let indexSlide = 0;
nextSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('photo-banner');

    if (n > listImage.length - 1) {
        indexSlide = 0;
    }

    if (n < 0) {
        indexSlide = listImage.length - 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none'
        index++;
    }

    listImage[indexSlide].style.display = 'block'
    console.log(listImage);
}

//setInterval(() => nextSlide(1), 3000);