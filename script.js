// Ambil elemen menu
var menu = document.querySelector('nav');

// Tambahkan event listener ketika pengguna mengarahkan kursor ke bagian menu
menu.addEventListener('mouseover', function() {
    // Perbesar bagian menu
    menu.style.transform = 'scale(1.1)';
    // Ubah warna latar belakang menu
    menu.style.backgroundColor = 'lightgray';
    // Ubah warna teks menu
    var menuItems = menu.querySelectorAll('a');
    menuItems.forEach(function(item) {
        item.style.color = 'black';
    });
});

// Tambahkan event listener ketika pengguna meninggalkan bagian menu
menu.addEventListener('mouseout', function() {
    // Kembalikan ukuran menu ke ukuran semula
    menu.style.transform = 'scale(1)';
    // Kembalikan warna latar belakang menu
    menu.style.backgroundColor = '';
    // Kembalikan warna teks menu
    var menuItems = menu.querySelectorAll('a');
    menuItems.forEach(function(item) {
        item.style.color = '';
    });
});
