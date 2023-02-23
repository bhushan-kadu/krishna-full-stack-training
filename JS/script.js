'use strict';
document.querySelector('.btn1').addEventListener('click', function () {
  let n1 = Number(document.querySelector('.inp1').value);
  let n2 = Number(document.querySelector('.inp2').value);
  let n3 = Number(document.querySelector('.inp3').value);
  document.querySelector('.chg1').textContent = n1 + n2 + n3;
});
document.querySelector('.btn2').addEventListener('click', function () {
  let n4 = Number(document.querySelector('.inp4').value);
  let n5 = Number(document.querySelector('.inp5').value);
  if (n4 == 50 || n5 == 50) {
    document.querySelector('.chg2').textContent = 'true';
  } else if (n4 + n5 == 50) {
    document.querySelector('.chg2').textContent = 'true';
  } else {
    document.querySelector('.chg2').textContent = 'false';
  }
});
document.querySelector('.btn3').addEventListener('click', function () {
  let n6 = Number(document.querySelector('.inp6').value);
  if (n6 % 3 == 0 || n6 % 7 == 0) {
    document.querySelector('.chg3').textContent = 'true';
  } else {
    document.querySelector('.chg3').textContent = 'false';
  }
});
document.querySelector('.btn4').addEventListener('click', function () {
  let n7 = Number(document.querySelector('.inp7').value);
  let n8 = Number(document.querySelector('.inp8').value);
  console.log(50 >= n7 <= 99);
  if ((n7 >= 50 && n7 <= 99) || (n8 >= 50 && n8 <= 99)) {
    document.querySelector('.chg4').textContent = 'true';
  } else {
    document.querySelector('.chg4').textContent = 'false';
  }
});
document.querySelector('.btn5').addEventListener('click', function () {
  let n9 = Number(document.querySelector('.inp9').value);
  let n10 = Number(document.querySelector('.inp10').value);
  let n11 = Number(document.querySelector('.inp11').value);
  document.querySelector('.chg5').textContent =
    n9 > n10 ? (n9 > n11 ? n9 : n11) : n10 > n11 ? n10 : n11;
});
document.querySelector('.btn6').addEventListener('click', function () {
  let n12 = Number(document.querySelector('.inp12').value);
  let n13 = Number(document.querySelector('.inp13').value);
  let n14 = Number(document.querySelector('.inp14').value);
  if (n12 % 10 == n13 % 10 && n13 % 10 == n14 % 10) {
    document.querySelector('.chg6').textContent = 'Same';
  } else {
    document.querySelector('.chg6').textContent = 'Different';
  }
});
document.querySelector('.btn7').addEventListener('click', function () {
  let n15 = document.querySelector('.inp15').value;
  document.querySelector('.chg7').textContent = reverse(n15);
  function reverse(str) {
    var newstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newstr = newstr + str[i];
    }
    return newstr;
  }
});
document.querySelector('.btn8').addEventListener('click', function () {
  let n16 = document.querySelector('.inp16').value;
  document.querySelector('.chg8').textContent = n16.toUpperCase();
});
