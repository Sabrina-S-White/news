$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', () => {
  console.log('ok')
  sidebar.classList.toggle('sidebarShow');
})

const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    flag.classList.toggle('flag-style-red')
    console.log(flag.parentElement.firstChild)
  })
})