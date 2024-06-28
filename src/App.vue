<script setup lang="ts">
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import Sidebar from './components/Sidebar.vue'
  import VueStickyToParent from '../lib/VueStickyToParent.vue'

  // Define a ref for the parent element and pass it to the VueStickyToParent component
  const container = ref<Maybe<HTMLElement>>(null);
</script>

<template>
  <div class="page">
    <aside ref="container" class="container">
      <VueStickyToParent :parent="container">
        <div class="sticky">
          <h1>Sticky to parent</h1>
          <p><strong>Scroll down to see how it works</strong></p>

          <hr>
          <p><strong>Note:</strong> the <code>.container</code> should have full height of the column, component sticks to it and moves <i>"inside"</i> it</p>
          <hr>
          
          <img src="./assets/vue.svg" class="logo" alt="Vue logo" />

          <Sidebar/>
        </div>
      </VueStickyToParent>
    </aside>
    <section class="section">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <HelloWorld msg="Vue + Nuxt compatible" />
    </section>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
  width: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.section {
  width: calc(100% - 300px);
}

/* Define styles of Sidebar container */
.container {
  position: relative;
  width: 300px;
  height: inherit;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Define styles of sticky content block */
.sticky {
  width: 300px;
}
</style>
