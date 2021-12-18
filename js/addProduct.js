///Get
const  renderProducts  = (products) => {
    users.forEach(product => {
        output += `
        <tr>
        <td class ="identify">${user.identification}</td>
        <td>${product.reference}</td>
        <td>${product.category}</td>
        <td>${user.cellPhone}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.zone}</td>
        <td>${user.type}</td>
        <td data-id=${user.id}>
        <button type="button" class="btn btn-success btn-editar-abrir" data-bs-toggle="modal" data-bs-target="#editModal" id="btnEdit"> Editar</button>
        <button type="button" id="btnDelete" class="btn btn-danger" > Eliminar</button>
        </td>
        </tr> `
    });
    listUsers.innerHTML = output;
}