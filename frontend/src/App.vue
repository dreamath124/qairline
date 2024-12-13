<script setup>
import { RouterLink } from 'vue-router'
import HelloWorld from './components/archive/HelloWorld.vue'
import TheWelcome from './components/archive/TheWelcome.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <nav>
      <RouterLink to="/admin">Admin</RouterLink>
      <RouterLink to="/ticket">Đặt vé</RouterLink>
      <RouterLink to="/seatManagement">Quản lý đặt chỗ</RouterLink>
      <RouterLink to="/news">Tin tức</RouterLink>
      <RouterLink to="/login">Đăng nhập</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView></RouterView>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  float: right;
}

header.wrapper {
  float: left
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
