$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebarShow');
})