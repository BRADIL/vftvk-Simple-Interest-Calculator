const cars = [
    'Sedan A',
    'Sedan B',
    'SUV C',
    'SUV D',
    'Truck E',
    'Van F'
];

const drivers = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank'
];

function populateSelect(id, items) {
    const select = document.getElementById(id);
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
}

function addReservation(event) {
    event.preventDefault();
    const car = document.getElementById('carSelect').value;
    const driver = document.getElementById('driverSelect').value;
    const date = document.getElementById('date').value;
    if (!car || !driver || !date) {
        alert('Please select car, driver and date.');
        return;
    }
    const tbody = document.getElementById('reservationBody');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${car}</td><td>${driver}</td><td>${date}</td>`;
    tbody.appendChild(row);
    document.getElementById('reservationForm').reset();
}

window.addEventListener('DOMContentLoaded', () => {
    populateSelect('carSelect', cars);
    populateSelect('driverSelect', drivers);
    document.getElementById('reservationForm').addEventListener('submit', addReservation);
});
