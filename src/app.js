// --------------------------
// ------Takács Dániel-------
// -------SZOFT I/2/N--------
// -------2023.05.19---------
// --------------------------

const doc = {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    ships: []
};

window.addEventListener('load', () => {
    init();
});

function init() {
    getShips();
}

function getShips() {
    let endpoint = 'ships';
    let url = state.host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        state.ships = result;
        render();
    });
}

function render() {
    var rows = '';
    state.ships.forEach( ship => {
        var row = `
        <tr class="color">
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
        </tr>
        `;
        rows += row;
        console.log(ship.name)
    })
    doc.tbody.innerHTML = rows;
}