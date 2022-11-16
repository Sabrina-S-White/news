function sidebarF() {
  const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
sidebarBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebarShow');
})
}


// const flags = document.querySelectorAll('.flag');
// flags.forEach(flag => {
//   flag.addEventListener('click', () => {
//     flag.classList.toggle('flag-style-red')
//   })
// })