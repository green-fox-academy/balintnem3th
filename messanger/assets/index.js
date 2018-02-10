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
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.send(JSON.stringify(send));
}

function sendMsg() {
  let text = document.getElementById('input_text').value;
  let user = 'anonim';
  let time = 20;
  let sendData = { user, msg: text, time_sent: 12 };
  console.log(sendData);
  connect('POST', '/post', console.log, sendData);
  document.getElementById('input_text').value = '';
  connect('GET', '/get', renderMsgBox, null);
}


function renderMsgBox(data) {
  const msgBox = document.getElementById('msg-box');
  removeChildrenFromNode(msgBox);// eslint-disable-line
  data.rows.forEach((element) => {  
    const messageSpan = document.createElement('span');
    messageSpan.innerHTML = element.msg;
    msgBox.appendChild(messageSpan);
  });
}


function removeChildrenFromNode(node) {
  if (node === undefined || node === null) {
    return;
  }
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}


const sendButton = document.getElementById('send');
sendButton.addEventListener('click', (sendMsg));  

setInterval(() => {
  connect('GET', '/get', renderMsgBox, null);
}, 1000);

// app.listen(3000, '0.0.0.0', () => {
//   console.log('Listening to port:  ' + 3000);
// });

