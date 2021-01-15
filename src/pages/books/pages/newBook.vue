<template>
    <div>
        <Header title="Agregar libros" />
        <div class="card">
            <div class="card-content">
                <FormNewBook />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../../../common/ui/header'
import FormNewBook from './../components/forms/newBook'

export default {
    components: {
        Header,
        FormNewBook
    }
}
</script>
