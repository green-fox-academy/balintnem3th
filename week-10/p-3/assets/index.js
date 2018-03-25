'use strict'; // eslint-disable-line
/* eslint linebreak-style: ['error', 'windows'] */
console.log(':)');

function connect(method, query, callback, send) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8080/${query}`;
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

function renderData(data) {
  const tbody = document.getElementById('table-body');
  removeChildrenFromNode(tbody);// eslint-disable-line
  data.rows.forEach((element) => {  
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.innerText = element.item_name;
    row.appendChild(name);
    tbody.appendChild(row);
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

window.addEventListener('load', () => {
  connect('GET', 'get', renderData, null);
});
