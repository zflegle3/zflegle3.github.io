let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me-image.jpeg') {
      myImage.setAttribute('src','images/me-image2.jpeg');
    /* Note: Adding alt image of different size causes errors */
    } else {
      myImage.setAttribute('src','images/me-image.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to my site, ' + myName;
    }
  }


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my Website, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }

/* COMMENTS EX */
// COMMENT LINE EX