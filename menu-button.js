function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
}