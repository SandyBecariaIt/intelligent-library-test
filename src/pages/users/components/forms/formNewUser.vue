<template>
    <div>
        <div class="columns">
            <b-field label="Identificador" class="column">
                <b-input v-model="form.enrollment"></b-input>
            </b-field>
            <b-field label="Nombre de usuario" class="column">
                <b-input v-model="form.name"></b-input>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="Cumpleaños" class="column">
                <b-input v-model="form.birthday"></b-input>
            </b-field>
            <b-field label="Telefono" class="column">
                <b-input v-model="form.phone"></b-input>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="Correo" class="column">
                <b-input v-model="form.email"></b-input>
            </b-field>
            <b-field label="Tipo de usuario" class="column">
                <b-select placeholder="Select a name">
                    <option
                        v-for="option in data"
                        :value="option.id"
                        :key="option.id">
                        {{ option.description }}
                    </option>
                </b-select>
            </b-field>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    description: 'Administrador'
                },
                {
                    id: 2,
                    description: 'Operador'
                },
                {
                    id: 3,
                    description: 'Lector'
                }
            ],
            form: {}
        }
    }
}
</script>
