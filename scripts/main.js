let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/books.jpg') {
      myImage.setAttribute ('src','images/book.jpg');
    } else {
      myImage.setAttribute ('src','images/books.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Books are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  alert("We've met before, haven't we?");
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
