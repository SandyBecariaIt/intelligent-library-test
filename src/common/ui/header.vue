<template>
    <div class="card">
        <div class="card-content">
            <p class="card-header-title">
              {{title}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            require,
        },
    }
}
</script>

<style scoped>
.card {
    height: 100px;
    margin-bottom: 15px;
}
.card-header-title {
    font-size: 25px;
}
</style>
