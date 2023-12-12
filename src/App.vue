<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './layouts/Header.vue'
import Aside from './layouts/Aside.vue'
import Footer from './layouts/Footer.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <section class="pt-5">
      <div class="container shadow section-sm rounded">
        <div class="columns is-multiline">
          <!-- sidebar -->
          <div class="column is-3-desktop is-12-tablet">
            <Aside></Aside>
          </div>
          <!-- body -->
          <div class="column is-8-desktop is-12-tablet">
            <div class="px-4">
              <h2 class="mb-4 has-text-weight-medium"></h2>
              <!-- main content -->

              <div class="bd-docs-main">
                <RouterView />
              </div>

              <!-- main content -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
