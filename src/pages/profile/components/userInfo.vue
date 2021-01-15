<template>
    <b-menu>
        <b-menu-list label="Información de usuario">
            <b-menu-item :label="`Identificador: ${user.enrollment}`"></b-menu-item>
            <b-menu-item :label="`Nombre de usuario: ${user.nameUser}`"></b-menu-item>
            <b-menu-item :label="`Cumpleaños: ${user.birthdate}`"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Información de contacto">
            <b-menu-item :label="`Telefono: ${user.phone}`"></b-menu-item>
            <b-menu-item :label="`Email: ${user.email}`"></b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
export default {
    props: {
        user: {
            require
        }
    }
}
</script>
