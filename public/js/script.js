//  GET 1: Cargar todos los clientes
function cargarClientes() {
    fetch("http://localhost:3000/api/clientes")
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById("listaClientes");
        if (!lista) return;

        lista.innerHTML = "";

        data.forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.nombre + " - " + cliente.email;
            lista.appendChild(li);
        });
    })
    .catch(err => console.log(err));
}

//  GET 2: Buscar cliente por ID
function buscarCliente() {
    const id = document.getElementById("buscarId").value;

    fetch(`http://localhost:3000/api/clientes/${id}`)
    .then(res => res.json())
    .then(data => {
        alert("Cliente: " + data.nombre + " - " + data.email);
    })
    .catch(err => console.log(err));
}

//  GET 3: Verificar email
function verificarEmail(email) {
    fetch(`http://localhost:3000/api/clientes/verificar/email?email=${email}`)
    .then(res => res.json())
    .then(data => {
        if (data.registrado) {
            alert("⚠️ Este correo ya existe");
        }
    })
    .catch(err => console.log(err));
}

// Ejecutar al cargar
cargarClientes();
