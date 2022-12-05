function register(event) {

    let werte = "Eingegebene Werte";
    let fname = document.querySelector('#firstName').value;
    let lname = document.querySelector('#lastName').value;
    let email = document.querySelector('#eMail').value;
    let ipadr = document.querySelector('#ipAddress').value;

    document.getElementById("spiegeloben").innerHTML = werte;
    document.getElementById("spiegel").innerHTML = fname;

    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(ipadr);

    event.preventDefault();
}

function addItem(inputEl) {
  let text = inputEl.value;
  inputEl.value = "";
  let textNode = document.createTextNode(text);
  let liNode = document.createElement('li');
  liNode.appendChild(textNode);
  let ulNode = document.getElementById('ul1');
  ulNode.appendChild(liNode);
}