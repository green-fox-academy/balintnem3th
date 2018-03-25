'use strict' ; // eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */

function connect(method, query, callback, sendBack) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8080/${query}`;
  // console.log('MyURL', url);
  const plate = document.getElementById('licence').value;
  xhr.open(method, url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log('data', data);
      createRow(data);
    }
  };
  xhr.setRequestHeader('content-type', 'Application/json');
  xhr.send(JSON.stringify(sendBack));
  console.log(sendBack);
}

function removeChildrenFromNode(node) {
  if (node === undefined || node === null) {
    return;
  }
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createRow(data) {
  const tableBody = document.getElementById('table-body');
  removeChildrenFromNode(tableBody);
  data.rows.forEach((element) => {
    let row = document.createElement('tr');
    let plate = document.createElement('td');
    plate.innerText = element.plate;
    row.appendChild(plate);
    let brand = document.createElement('button');
    brand.innerText = element.car_brand;
    row.appendChild(brand);
    tableBody.appendChild(row);
  });  
}

function search() {
  const plate = document.getElementById('licence').value;
  console.log('aaa', plate);
  let sendBack = { q: 1, v: 4 };
  connect('GET', 'search', createRow, sendBack);
}

// function myLoader() {
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  search();
  // });
  // const mainForm = document.getElementById('myForm');
  // mainForm.
});
