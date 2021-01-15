<template>
    <div>
        <Header title="Perfil de usuario" />
        <section>
            <div class="card">
                <div class="card-content">
                    <b-tabs v-model="activeTab">
                        <b-tab-item label="Usuario">
                            <UserInfo :user="profile[0]" />
                        </b-tab-item>

                        <b-tab-item label="Libros prestados">
                            <TableBooks />
                        </b-tab-item>
                    </b-tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './../../common/ui/header'
import UserInfo from './components/userInfo'
import TableBooks from './components/booksLoad'

export default {
    computed: {
        ...mapState('user', {
          profile: 'profile'
      })
    },

    mounted() {
        this.$store.dispatch('user/loadProfile', { enrollment: '12345' })
    },

    data() {
        return {
            activeTab: 0,
        }
    },

    components: {
        Header,
        UserInfo,
        TableBooks,
    }
}
</script>