<script setup lang="ts">
  import { ref, computed, StyleValue } from 'vue';
  import { useElementBounding, useElementSize, useWindowScroll, useWindowSize } from '@vueuse/core';

  defineOptions({
    name: 'VueStickyToParent',
  });

  interface Props {
    parent: Maybe<HTMLElement>;
  }

  const props = defineProps<Props>();

  const sticky = ref<Maybe<HTMLElement>>(null);
  const parentRef = computed<Maybe<HTMLElement>>(() => props.parent);

  const { y: scrollY } = useWindowScroll();
  const { height: windowHeiqht } = useWindowSize();
  const { height } = useElementSize(sticky);
  const { height: parentHeight } = useElementSize(parentRef);
  const { left, right } = useElementBounding(parentRef);

  const stickyTop = computed<number>(() => (parentRef.value?.getBoundingClientRect().top ?? 0) + scrollY.value);
  const parentBottom = computed<number>(() => stickyTop.value + parentHeight.value - windowHeiqht.value);

  const styles = computed<StyleValue>(() => {
    const max = Math.max(parentBottom.value - (stickyTop.value + height.value - windowHeiqht.value), 0);
    const min = 0;
    const current =
      height.value > windowHeiqht.value
        ? scrollY.value + windowHeiqht.value - height.value - stickyTop.value
        : scrollY.value - stickyTop.value;

    return current >= min && current <= max
      ? {
          ...(height.value > windowHeiqht.value ? { bottom: 0 } : { top: 0 }),
          position: 'fixed',
          left: `${left.value}px`,
          right: `${right.value}px`,
        }
      : { top: `${current < min ? min : max}px` };
  });
</script>

<template>
  <div
    ref="sticky"
    class="sticky-to-parent"
    :style="styles">
    <slot />
  </div>
</template>

<style lang="css" scoped>
  .sticky-to-parent {
    position: absolute;
    left: 0;
  }
</style>
