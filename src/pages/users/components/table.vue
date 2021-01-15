<template>
    <div>
        <NoInfo v-if="data.length === 0" />
        <table class="table" v-if="data.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre usuario</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Tipo de usuario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody v-for="item in data" :key="item.enrollment">
                <tr>
                    <td>{{item.enrollment}}</td>
                    <td>{{item.nameUser}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.descriptionType}}</td>
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
import NoInfo from './../../../common/ui/no-info'

export default {

    props: {
        data: {
            require,
            type: Array
        }
    },

    components: {
        NoInfo
    }
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
