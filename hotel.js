document.getElementById('reserve-button').addEventListener('click', function () {
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;

    if (!date) {
        alert('Por favor, selecciona una fecha.');
        return;
    }

    const reservation = `${room} para el ${date}`;
    addReservation(reservation);
});

function addReservation(reservation) {
    const list = document.getElementById('reservations-list');
    const listItem = document.createElement('li');
    listItem.textContent = reservation;
    list.appendChild(listItem);
}
