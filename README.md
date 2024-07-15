# Vue 3 and Nuxt 3 compatible sticky block component

[![npm version](https://badge.fury.io/js/vue-sticky-to-parent.svg)](https://badge.fury.io/js/vue-sticky-to-parent)
[![Github Package](https://github.com/siibragimov/vue-sticky-to-parent/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/siibragimov/vue-sticky-to-parent/actions/workflows/npm-publish-github-packages.yml)
[![Node.js Package](https://github.com/siibragimov/vue-sticky-to-parent/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/siibragimov/vue-sticky-to-parent/actions/workflows/npm-publish.yml)

Makes block sticky to it's parent block. To see how it works, please, see the demo.

![Demo](https://raw.github.com/siibragimov/vue-sticky-to-parent/main/public/demo.webp)

## Installation and setup

### 1. Install component:
If you want to install package from __npmjs registry__(recommended) use:
```shell
npm i vue-sticky-to-parent
```

```shell
yarn add vue-sticky-to-parent
```

```shell
pnpm add vue-sticky-to-parent
```

If you want to install package from __GitHub packages__ use: 

```shell
npm install @siibragimov/vue-sticky-to-parent
```
**Note**: Don't forget to configure registry for installing packages from GitHub. Use __.npmrc__ file or use command:
```shell
npm config set registry https://npm.pkg.github.com/
```

### 2. Import CSS.
For Vue 3:
```javascript
  // in entry point (main.js)
  import '../node_modules/vue-sticky-to-parent/dist/style.css';
```
For Nuxt 3:
```javascript
  // nuxt.config.ts
  export default defineNuxtConfig({
    css: ['~/node_modules/vue-sticky-to-parent/dist/style.css'],
  });
```
**Note**: If you have problems with import, check the file path and especially the prefix.


### 3. Define styles for block(Sidebar) container. See the [`App.vue`](/src/App.vue).

**Note**: the `.container` should have full height of the column, component sticks to it and moves _"inside"_ it.


### 4. Import component in your code:
```javascript
import { VueStickyToParent } from 'vue-sticky-to-parent'
```


### 5. Wrap content you want to be sticky.
Define `ref` for the parent container and pass it to `vue-sticky-to-parent` component props.

```javascript
  const container = ref<HTMLElement>();
```

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

## Contributing

To run in development mode 
```shell
npm run dev
```

Use for build component
```shell
npm run build
```
and follow the instruction in console to open the test page.

To generate types you can use:
```shell
npm run types
```
