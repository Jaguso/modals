document.getElementById('button').addEventListener('click', 
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function() {
  // console.log(123)
  document.querySelector('.bg-modal').style.display = 'none';
});