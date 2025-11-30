<script setup lang="ts">
import { computed } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { useIntersectionAnimation } from '@/composables/intersectAnimation'
import IconLink from './IconLink.vue'

defineProps<{
  title: string
  year: string
  description: string
  description2: string
}>()

const { animationProgress, animateIntersection: onIntersection }
  = useIntersectionAnimation()

const animationTranslateStack = computed(
  () => `${animationProgress.value * 10 - 10}rem`,
)
const animationTranslateParagraph = computed(
  () => `${animationProgress.value * 7.5 - 7.5}rem`,
)
const animationTranslateTitle = computed(
  () => `${animationProgress.value * 5 - 5}rem`,
)
</script>

<template>
  <article
    v-intersection-observer="[onIntersection, { threshold: 0.5 }]"
    class="article-experience"
  >
    <div>
      <h2>{{ title }}</h2>
      <h3>{{ year }}</h3>
    </div>
    <p>{{ description }}</p>
    <p style="margin-top: 15px">
      {{ description2 }}
    </p>
  </article>
</template>

<style scoped>
.article-experience {
  width: 100%;
  max-width: 50rem;
  white-space: normal;
  overflow-wrap: break-word;
}

.article-experience p {
  white-space: normal;
  overflow-wrap: break-word;
}

.article-experience:is(h2, h3, p) {
  transform-origin: 0 50%;
  opacity: v-bind(animationProgress);
  transform: translateX(v-bind(animationTranslateTitle));
}
.article-experience > p {
  transform: translateX(v-bind(animationTranslateParagraph));
}
.article-experience > :is(div) {
  margin: 2rem 0;
}

.icon {
  opacity: 0;
  transform-origin: 50% 50%;
  transition: transform 0.6s cubic-bezier(0, 1, 0.18, 1),
    opacity 0.6s cubic-bezier(0, 1, 0.18, 1);
}

.link {
  color: var(--color-text-highlight);
  font-weight: 400;
}
.link:is(:hover, :focus) .icon {
  opacity: 1;
}

@media (max-width: 800px) {
  .article-experience:is(h2, h3) {
    transform: translateY(
      calc(v-bind(animationTranslateTitle) * var(--animation-values-coef))
    );
  }
  .article-experience > p {
    transform: translateY(
      calc(v-bind(animationTranslateParagraph) * var(--animation-values-coef))
    );
  }
}
</style>
