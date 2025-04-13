const button = document.querySelectorAll('.boxes');
const body = document.querySelector("body");

button.forEach(function (box) {
  box.addEventListener('click', function (color) {
    if (color.target.id === 'c1') {
      body.style.backgroundColor = '#ffadad';
    }
    if (color.target.id === 'c2') {
      body.style.backgroundColor = '#879e82';
    }
    if (color.target.id === 'c3') {
      body.style.backgroundColor = '#ffa600';
    }
    if (color.target.id === 'c4') {
      body.style.backgroundColor = '#d8bffc';
    }
  });
});
