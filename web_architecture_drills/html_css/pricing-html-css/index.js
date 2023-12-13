const price = ['199.90', '249.9', '399.99'];
const originalPrice = ['19.99', '24.99', '39.99'];

function hello() {
  const isChecked = document.getElementById('check');
  const id = document.getElementsByClassName('price');

  if (isChecked.checked) {
    for (let i = 0; i < id.length; i++) {
      id[i].innerHTML = `<span class="dollar">&dollar;</span>${price[i]}`;
    }
  } else {
    for (let i = 0; i < id.length; i++) {
      id[
        i
      ].innerHTML = `<span class="dollar">&dollar;</span>${originalPrice[i]}`;
    }
  }
}
