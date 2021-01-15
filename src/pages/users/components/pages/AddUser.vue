<template>
    <div>
        <Header title="Agregar usuarios" />
        <div class="card">
            <div class="card-content">
                <FormNewUser />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../../../../common/ui/header'
import FormNewUser from './../forms/formNewUser'

export default {
    components: {
        Header,
        FormNewUser
    }
}
</script>
