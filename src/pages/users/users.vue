<template>
    <div>
        <Header title="Usuarios" />
        <b-tooltip label="Agregar Usuarios">
            <div class="router-link">
                <router-link to="add-user">
                    Nuevo usuario
                </router-link>
            </div>
        </b-tooltip>
        <div class="card">
            <div class="card-content">
                <UserTable :data="users" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './../../common/ui/header'
import UserTable from './components/table'

export default {

    computed: {
        ...mapState('user', {
          users: 'items'
      })
    },

    mounted() {
        this.$store.dispatch('user/loadItems')
    },

    components: {
        Header,
        UserTable,
    }
}
</script>

<style scoped>
.router-link {
    margin: 10px;
}
</style>
