<template>
  <div class="rpp-wrapper">
    <div class="card">
      <div class="card-content">
        <b-menu>
          <b-menu-list label="Biblioteca">
            <b-menu-item label="Usuarios" tag="router-link" to="/users"></b-menu-item>
            <b-menu-item label="Libros" tag="router-link" to="/books"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Información de usuario">
            <b-menu-item label="Perfil" tag="router-link" to="/profile"></b-menu-item>
            <b-menu-item label="Cerrar sesión"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </div>
    
    <div class="rpp-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>

