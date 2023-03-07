// sidebar toggle
const btnToggle = document.querySelector('.toggle-btnn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebare').classList.toggle('active');
  console.log(document.getElementById('sidebare'))
});
