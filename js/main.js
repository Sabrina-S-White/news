$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', () => {
  console.log('ok')
  sidebar.classList.toggle('sidebarShow');
})