function dataperson(){

        let forms = document.getElementById('frm');
        var nama = forms.elements.namedItem("nama").value;
        var pekerjaan = forms.elements.namedItem("pekerjaan").value;
        var hobby = forms.elements.namedItem("hobby").value;
        let input = 'Selamat Datang'+'<br> Nama '+': ' + nama + '<br> Pekerjaan '+': ' + pekerjaan + '<br> Hobby '+': ' + hobby;
        let no_input = 'maaf data tidak di isi dengan lengkap!';
        var hasil = document.getElementById("hasil");
        hasil.innerHTML = (nama && pekerjaan && hobby !='') ? input : no_input;

    //tugas nya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada html
    //1. isian nama
    //2. isian pekerjaan
    //3. isian hobby
}