<template>
<div>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre de Libro</th>
                <th>Descripción</th>
                <th>Genero</th>
                <th>Cantidad de Libros</th>
                <th>Editorial</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody v-for="item in data" :key="item.idBook">
            <tr>
                <td>{{item.idBook}}</td>
                <td>{{item.nameBook}}</td>
                <td>{{item.bookDescription}}</td>
                <td>{{item.description}}</td>
                <td>{{item.nameEditorial}}</td>
                <td>{{item.quantity}}</td>
                <td class="actions">
                    <div class="margin-content">Editar</div>
                    <div class="margin-content">Eliminar</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {

        props: {
            data: {
                require,
                type: Array
            }
        },
    }
</script>

<style scoped>
.actions {
    display: flex;
}
.margin-content {
    margin-right: 10px;
    margin-left: 10px;
}
</style>
