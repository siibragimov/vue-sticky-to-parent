# Vue 3 and Nuxt 3 compatible sticky block component

Makes block sticky to it's parent block. To see how it works, plaese, see the demo.

![Demo](/public/demo.webp)

## Installation and setup

### 1. Install component:

```shell
npm i vue-sticky-to-parent
```

```shell
yarn add vue-sticky-to-parent
```

```shell
pnpm add vue-sticky-to-parent
```

### 2. Import CSS.
For Vue 3:
```javascript
  // in entry point (main.js)
  import '~/node_modules/vue-sticky-to-parent/style.css';
```
For Nuxt 3:
```javascript
  // nuxt.config.ts
  export default defineNuxtConfig({
    css: ['~/node_modules/vue-sticky-to-parent/style.css'],
  });
```

### 3. Define styles for block(Sidebar) container. See the [`App.vue`](/src/App.vue).

**Note**: the `.container` should have full height of the column, component sticks to it and moves _"inside"_ it.

### 4. Wrap content you want to be sticky.
Example:
```javascript
<aside ref="container" class="container">
  <VueStickyToParent :parent="container">
    <div class="sticky">
      <!-- YOUR CONTENT -->
    </div>
  </VueStickyToParent>
</aside>
```

## Contibuting

To run in development mode 
```shell
npm run dev
```

Use for build component
```shell
npm run build
```
and follow instruction in console to open the test page.
