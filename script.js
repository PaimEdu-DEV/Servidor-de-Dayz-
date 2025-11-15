// Espera o HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Lateral ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    const abrirMenu = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    };

    const fecharMenu = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    menuToggle.addEventListener('click', abrirMenu);
    sidebarClose.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);

});