function checkOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    let isOpen = false;

const DiaAbierto = 1;
const DiaCerrado = 5;

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) {
        isOpen = true;
    }

    const statusElement = document.getElementById('status');
    if (isOpen) {
        statusElement.textContent = 'Abierto';
        statusElement.style.backgroundColor = 'green';
    } else {
        statusElement.textContent = 'Cerrado';
        statusElement.style.backgroundColor = 'red';
    }
}

window.onload = checkOpenStatus;


setInterval(checkOpenStatus, 60000); 