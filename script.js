// Ambil semua elemen menu
var menuItems = document.querySelectorAll('.menu li');

// Tambahkan event listener untuk setiap elemen menu
menuItems.forEach(function(item) {
    // Ketika kursor melewati elemen menu
    item.addEventListener('mouseover', function() {
        // Perbesar ukuran menu
        item.style.transform = 'scale(1.2)';
        // Ganti warna menu
        item.style.color = 'blue';
    });

    // Ketika kursor meninggalkan elemen menu
    item.addEventListener('mouseout', function() {
        // Kembalikan ukuran menu ke semula
        item.style.transform = 'scale(1)';
        // Kembalikan warna menu ke semula
        item.style.color = 'black';
    });
});
