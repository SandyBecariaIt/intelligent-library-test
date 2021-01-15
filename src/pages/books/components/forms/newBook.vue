<template>
    <div>
        <div class="columns">
            <b-field label="Titulo de libro" class="column">
                <b-input v-model="form.title"></b-input>
            </b-field>
            <b-field label="Cantidad" class="column">
                <b-input v-model="form.quantity"></b-input>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="Descripción" class="column">
                <b-input v-model="form.description"></b-input>
            </b-field>
            <b-field label="Genero" class="column">
                <b-input v-model="form.gene"></b-input>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="editorial" class="column">
                <b-input v-model="form.editorial"></b-input>
            </b-field>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    }
}
</script>
