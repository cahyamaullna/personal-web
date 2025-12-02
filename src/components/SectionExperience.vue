<script setup lang="ts">
import PageExperienceItem from '@/components/SectionExperienceItem.vue'
import { computed } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { animateBackgroundIntersectionWorks } from '@/three/animations'
import { useIntersectionAnimation } from '@/composables/intersectAnimation'

const experiences = [
  {
    title: 'PLN Icon Plus',
    year: 'Web Software Developer (2022 - Present)',
    description:
      '- Responsible for leading the frontend development of new AP2T modules (Billing, RTR, and FSM) using a Micro Frontend (MFE) architecture. Focused on building scalable, modular, and high-performance interfaces integrated within enterprise systems.',
    description2: '- Developed and maintained frontend - backend services for PLTS Atap, Web Portal modules (Dedicated Source (DS), SPKLU, Home Charging Services and API Integration PLN Mobile) etc.',
  },
  {
    title: 'PT FAN Integrasi Teknologi',
    year: 'Fullsatck Web Dev (2021 - 2022)',
    description:
      'Internship. Create an internal application for company attendance, leave and payroll using the monolithic laravel and sql system',
  },
  {
    title: 'Kejar.id',
    year: 'Backend Dev (2021)',
    description:
      'Internship. Maintenance of the Kejar ID application with the Lumen technology stack',
  },
]

const { animationProgress, animateIntersection: onIntersectionTitle }
  = useIntersectionAnimation()

const animationTranslateTitle = computed(
  () => `${5 - animationProgress.value * 5}rem`,
)

const animationIntersectWorksThreshold = computed(() => 1 / experiences.length)
function onIntersection (entries: IntersectionObserverEntry[]) {
  const [{ isIntersecting }] = entries
  if (isIntersecting) {
    animateBackgroundIntersectionWorks()
  }
}
</script>

<template>
  <section
    v-intersection-observer="[
      onIntersection,
      { threshold: animationIntersectWorksThreshold },
    ]"
    class="section-experiences"
  >
    <h2
      v-intersection-observer="[onIntersectionTitle, { threshold: 1 }]"
      class="title"
    >
      Experience
    </h2>
    <div class="experiences-list">
      <PageExperienceItem
        v-for="(ex, index) in experiences"
        :key="index"
        :title="ex.title"
        :year="ex.year"
        :description="ex.description"
        :description2="ex.description2"
      />
    </div>
  </section>
</template>

<style scoped>
.section-experiences {
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10rem;
  margin: 10rem 0;
}
.section-experiences > .experiences-list {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}
.section-experiences > .title {
  align-self: flex-end;
  flex-shrink: 0;
  position: sticky;
  left: 0;
  bottom: 50%;
  margin: 2rem 0;
  opacity: v-bind(animationProgress);
  transform: translateY(v-bind(animationTranslateTitle));
}

@media (max-width: 800px) {
  .section-experiences > .title {
    transform: translateY(
      calc(v-bind(animationTranslateTitle) * var(--animation-values-coef))
    );
  }
}

@media (max-width: 1200px) {
  .section-experiences {
    flex-wrap: wrap;
    gap: 0;
  }
  .section-experiences > .experiences-list {
    gap: 5rem;
  }
  .section-experiences > .title {
    position: static;
    margin-bottom: 0;
  }
}
</style>
