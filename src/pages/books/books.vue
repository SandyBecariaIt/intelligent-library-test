<template>
    <div>
        <Header title="Libros" subtitle="Biblioteca > Libros" />
        <b-tooltip label="Agregar Libros">
            <div class="router-link">
                <router-link to="add-books">
                    Agregar
                </router-link>
            </div>
        </b-tooltip>
        <b-tooltip label="Preatamos">
            <div class="router-link">
                <router-link to="actions-loan">
                    Prestamo
                </router-link>
            </div>
        </b-tooltip>
        <b-tooltip label="Devoluciones">
            <div class="router-link">
                <router-link to="actions-return">
                    Prestamo
                </router-link>
            </div>
        </b-tooltip>
        <div class="card">
            <div class="card-content">
                <BooksTable :data="books" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './../../common/ui/header'
import BooksTable from './components/table'

export default {

    computed: {
      ...mapState('book', {
          books: 'items'
      })
    },

    mounted() {
        this.$store.dispatch('book/loadItems')
    },

    components: {
        Header,
        BooksTable
    }
}
</script>

<style scoped>
.router-link {
    margin: 10px;
}
</style>
