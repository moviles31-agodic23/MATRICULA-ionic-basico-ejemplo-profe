const listaElement = document.getElementById('lista');
const totalElement = document.getElementById('total');
let total = 0;

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const precioInput = document.getElementById('precio');

    const nombre = nombreInput.value;
    const precio = parseFloat(precioInput.value).toFixed(2);

    if (nombre && !isNaN(precio)) {
        const listItem = document.createElement('li');
        
        const registroDiv = document.createElement('div');
        registroDiv.classList.add('registro');
        
        const nombreSpan = document.createElement('span');
        nombreSpan.classList.add('nombre');
        nombreSpan.textContent = nombre;
        
        const precioSpan = document.createElement('span');
        precioSpan.classList.add('precio');
        precioSpan.textContent = precio;

        registroDiv.appendChild(nombreSpan);
        registroDiv.appendChild(precioSpan);
        
        listItem.appendChild(registroDiv);

        listaElement.appendChild(listItem);

        nombreInput.value = '';
        precioInput.value = '';

        total += parseFloat(precio);

        totalElement.textContent = `Total $${total.toFixed(2)}`;
    }
});
