 // penambahan interaktivitas dengan JavaScript
    document.querySelector('.header-text').addEventListener('click', function() {
        alert('Anda mengklik judul header!');
    });

 // Fungsi untuk menampilkan pesan konfirmasi
    function showConfirmation(artikel) {
        var confirmation = confirm('Anda akan membuka artikel: ' + artikel + '. Lanjutkan?');
        if (!confirmation) {
            // Mencegah navigasi jika pengguna membatalkan konfirmasi
            event.preventDefault();
        }
    }
