'use strict'; // eslint-disable-line
/* eslint linebreak-style: ['error', 'windows'] */

function connect(method, query, callback, send) {
  const xhr = new XMLHttpRequest();
  // const url = `http://localhost:8080${query}`;
  const url = `http://127.0.0.1:3456${query}`;
  // console.log('MyURL', url);
  xhr.open(method, url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.send(JSON.stringify(send));
}

function create() {
  const name = document.getElementById('create-name').value;
  const pw = document.getElementById('create-pw').value;
  const sendData = {
    user_name: name,
    user_password: pw,
    logged_in: 0,
  };
  console.log(sendData);
  connect('POST', '/post/user', console.log, sendData);
}

function removeChildrenFromNode(node) {
  if (node === undefined || node === null) {
    return;
  }
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

const sendButton = document.getElementById('create');
sendButton.addEventListener('click', create);

