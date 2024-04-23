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

// Mendapatkan semua tautan artikel
var artikelLinks = document.querySelectorAll('.blog .article-list a');

// Menambahkan event listener untuk setiap tautan artikel
artikelLinks.forEach(function(link) {
    // Ketika kursor diarahkan ke tautan artikel
    link.addEventListener('mouseover', function() {
        // Menambahkan efek animasi (misalnya, perubahan warna latar belakang)
        link.style.backgroundColor = '#f0f0f0';
        link.style.transition = 'background-color 0.3s ease';
    });

    // Ketika kursor meninggalkan tautan artikel
    link.addEventListener('mouseout', function() {
        // Menghapus efek animasi
        link.style.backgroundColor = 'transparent';
    });
});
