// animation slide home here
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2200); 
}
const btnClose = document.getElementById('btnClose');
const sticky = document.getElementById('sticky');

btnClose.addEventListener('click', ()=> {
  sticky.style.display = 'none';
  console.log("passed sticky close");
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwAY3l9FwI-lk_hKsu5y0ug6nwIN_G0c0uV_TT-LYnKL_J3s42pD_2hBkQwo_gu7dlr/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// pesan text area
document.getElementById('vip').addEventListener('click', function() {
  document.getElementById('message').value = 'Saya ingin paket VIP';
});
document.getElementById('bisnis').addEventListener('click', function() {
  document.getElementById('message').value = 'Saya ingin paket BISNIS';
});
document.getElementById('ekonomi').addEventListener('click', function() {
  document.getElementById('message').value = 'Saya ingin paket EKONOMI';
});
 

