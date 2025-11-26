async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const usuario = await respuesta.json();

        console.log("Nombre:", usuario.nombre);
        console.log("Username:", usuario.name);
        console.log("Email:", usuario.email);
    } catch (error) {
        console.error("Error al cargar el usuario:", error);
    }
}