'use strict' ; // eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */

function connect(method, query, callback) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8080${query}`;
  // console.log('MyURL', url);
  xhr.open(method, url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.send();
}


function createTableRow(data) {
  // console.log(data);
  const tbody = document.getElementById('planetRows');
  tbody.innerHTML = '';
  connect('GET', '/ship', (shipInfo) => {
    data.rows.forEach((element) => { 
      const tableRow = document.createElement('tr');
      // console.log(shipInfo);
      // Name
      const nameCell = document.createElement('td');
      // nameCell.appendChild(document.createTextNode(element.name));
      nameCell.innerText = element.name;
      // console.log('name',nameCell.innerText );
      tableRow.appendChild(nameCell);
      // Population
      const populationCell = document.createElement('td');
      populationCell.setAttribute('data-planet-id', element.id);
      populationCell.appendChild(document.createTextNode(element.population));
      tableRow.appendChild(populationCell);
      // Button
      const buttonCell = document.createElement('td');
      if (element.name === shipInfo.rows[0].planet) {
        const buttonLeft = document.createElement('button');
        buttonLeft.appendChild(document.createTextNode('\u2190 to planet'));
        buttonLeft.setAttribute('data-planet-id', element.id);
        // buttonLeft.addEventListener('click', moveToPlanet);
        const buttonRight = document.createElement('button');
        buttonRight.appendChild(document.createTextNode('to ship \u2192'));
        buttonRight.setAttribute('data-planet-id', element.id);
        buttonRight.addEventListener('click', () => {
          moveToShip(element.id);
        });
        buttonCell.appendChild(buttonLeft);
        buttonCell.appendChild(buttonRight);
        let peopleOnShip = document.createElement('td');
        peopleOnShip.appendChild(document.createTextNode(shipInfo.rows[0].utilization));
        tableRow.appendChild(buttonCell);
        tableRow.appendChild(peopleOnShip);
      } else {
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Move here'));
        button.setAttribute('data-planet-id', element.id);
        button.addEventListener('click', () => {
          moveShip(element.id);
          // console.log(element.id);
        });
        buttonCell.appendChild(button);
        tableRow.appendChild(buttonCell);
      }
      tbody.appendChild(tableRow);
    });
  });
}

window.addEventListener('load', () => {
  connect('GET', '/planets', createTableRow);
});

function moveShip(planetName) {
  connect('POST', `/movehere/${planetName}`);
  connect('GET', '/planets', createTableRow);
}

function moveToShip(planetId) {
  connect('POST', `/toShip/${planetId}`);
  connect('GET', '/planets', createTableRow);
}
