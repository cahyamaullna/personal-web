<script setup lang="ts">
import { computed, ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { useIntersectionAnimation } from '@/composables/intersectAnimation'
import { useTimePassed } from '@/composables/timePassed'
import { animateBackgroundIntersectionAbout } from '@/three/animations'

const myName = 'Muhamad Cahya Maulana'

const { years: age } = useTimePassed('2004-04-29T05:00:00+0500')
const { sumSeconds } = useTimePassed('2024-01-06T15:00:00+0500')

const onlySeconds = ref(true)
const changeExpTime = () => (onlySeconds.value = !onlySeconds.value)

const { animationProgress, animateIntersection } = useIntersectionAnimation()

const animationTranslateParagraph = computed(
  () => `${10 - animationProgress.value * 10}rem`,
)
const animationTranslateTitle = computed(
  () => `${5 - animationProgress.value * 5}rem`,
)

function onIntersection (entries: IntersectionObserverEntry[]) {
  animateIntersection(entries)

  const [{ isIntersecting }] = entries
  if (isIntersecting) {
    animateBackgroundIntersectionAbout()
  }
}
</script>

<template>
  <section
    v-intersection-observer="[onIntersection, { threshold: 0.5 }]"
    class="section-about"
  >
    <h2>About Me</h2>
    <div class="about-content">
      <div class="text-content">
        <p>
          Hello, traveler! Welcome to my personal website. I'm {{ myName }}, a Web developer and tech enthusiast. I enjoy programming,
          listening to music, and exploring art. My goal is to become a better
          version of myself every day. 
        </p>
        <p>
          This website has been running for
          <span
            v-if="onlySeconds"
            class="exp-time"
            @click="changeExpTime"
          >
            {{ sumSeconds }} seconds.
          </span>
        </p>
      </div>
      <div>
        <div class="profile-picture" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-about {
  margin-bottom: 20rem;
}

.section-about > .content-about > p {
  opacity: v-bind(animationProgress);
  transform: translateY(v-bind(animationTranslateParagraph));
}
.section-about > h2 {
  transform: translateY(v-bind(animationTranslateTitle));
  margin: 2rem 0;
}

.exp-time {
  cursor: pointer;
  color: var(--color-text-highlight);
}

@media (max-width: 800px) {
  .section-about {
    margin-bottom: 10rem;
  }
  .section-about > * {
    transform: translateY(
      calc(v-bind(animationTranslateParagraph) * var(--animation-values-coef))
    );
  }
  .section-about > h2 {
    transform: translateY(
      calc(v-bind(animationTranslateTitle) * var(--animation-values-coef))
    );
  }
}

.about-content {
  display: flex;
  align-items: flex-start;
}

.text-content {
  max-width: 40rem;
}

.profile-picture {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: url("../assets/pp.jpeg") center center/cover no-repeat;
  margin-left: 10rem;
  margin-top: -1rem;
  transition: transform 0.3s ease-out;
}

.profile-picture:hover {
  transform: scale(1.2);
  transition: transform 0.4s ease;
}

.profile-picture::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid transparent;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.profile-picture:hover::before {
  opacity: 1;
}

/* ===== DESKTOP / LAPTOP (default) ===== */
.about-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.profile-picture {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-left: 10rem;
  margin-top: -1rem;
  flex-shrink: 0;
  transition: transform 0.3s ease-out;
}

/* ===== MOBILE & TABLET RESPONSIVE ===== */
/* MOBILE & TABLET */
@media (max-width: 900px) {
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  /* Foto pindah ke urutan pertama */
  .profile-picture {
    order: -1;
    margin: 0;
    width: 14rem;
    height: 14rem;
  }

  .text-content {
    order: 2;
    max-width: 90%;
    padding: 0 1rem;
  }
}
</style>
