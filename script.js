console.log('hello!');

function checkCodename() {
  let codename = document.getElementById('string').value;
  let valid = true;
  let upperCount = 0;
  let lowerCount = 0;
  let numCount = 0;

  if (codename.length < 5) {
    valid = false;
    console.log('too shortttttttttttttt');
  }

  for (let char of codename) {
    if (char == char.toUpperCase()) {
      upperCount += 1;
    }
    if (char == char.toLowerCase()) {
      lowerCount += 1;
    }
    if (!isNaN(char)) {
      numCount += 1;
    }
  }
  if (upperCount < 1 || lowerCount < 1) {
    valid = false;
    console.log('not enough uppercase or lowercase characters, sorry');
  }
  if (numCount < 2) {
    valid = false;
    console.log('you need more than 2 numbers in you codename');
  }

  if (!valid) {
    alert('not valid');
  } else {
    alert('valid');
  }
}
