<script setup lang="ts">
import { computed } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { useIntersectionAnimation } from '@/composables/intersectAnimation'
import { animateBackgroundIntersectionContacts } from '@/three/animations'

const contacts = [
  {
    name: 'email',
    link: 'cahyaah66@gmail.com',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/fullofhexes/',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/muhamad-cahya-maulana-2bbb38190/',
  },
]

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
    animateBackgroundIntersectionContacts()
  }
}
</script>

<template>
  <section
    v-intersection-observer="[onIntersection, { threshold: 0.5 }]"
    class="section-contacts"
  >
    <h2>Contact Me</h2>
    <ul class="contacts-list">
      <li
        v-for="contact in contacts"
        :key="contact.name"
      >
        <a
          v-if="contact.name === 'email'"
          class="btn-contact"
          :href="`mailto:${contact.link}`"
        >
          <svg
            t="1704549381974"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3335"
            width="30"
            height="30"
          >
            <path
              d="M868.1 932H155.9c-77.4 0-140.3-62.9-140.3-140.3V232.3c0-77.4 63-140.3 140.3-140.3H868c77.4 0 140.3 62.9 140.3 140.3v559.4c0.1 77.4-62.9 140.3-140.2 140.3zM155.9 146.5c-47.3 0-85.8 38.5-85.8 85.8v559.4c0 47.3 38.5 85.8 85.8 85.8H868c47.3 0 85.7-38.5 85.7-85.8V232.3c0-47.3-38.5-85.8-85.7-85.8H155.9z"
              p-id="3336"
            />
            <path
              d="M511.9 557.7c-3.3 0-6.5-1-9.4-2.9l-467.6-326c-7.4-5.2-9.2-15.4-4.1-22.8 5.2-7.4 15.4-9.2 22.8-4.1l458.3 319.4L970.4 202c7.4-5.2 17.6-3.3 22.8 4.1 5.2 7.4 3.3 17.6-4.1 22.8L521.3 554.8a16.8 16.8 0 0 1-9.4 2.9z"
              p-id="3337"
            />
          </svg>
          <span> Email </span>
        </a>
        <a
          v-else-if="contact.name === 'instagram'"
          class="btn-contact"
          :href="contact.link"
          target="_blank"
        >
          <svg
            class="icon"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0.1 5.7 0.2 4.7 0.4 3.9 0.8 3.1 1.1 2.4 1.6 1.7 2.3 1 3 0.5 3.7 0.2 4.5 0 5.3-.2 6.3-.1 7.6 0 9 0 9.3 0 12s0 3 .1 4.4c.1 1.3.3 2.3.6 3.1.3.8.8 1.5 1.5 2.2.7.7 1.4 1.2 2.2 1.5.8.3 1.8.5 3.1.6 1.3.1 1.6.1 4.4.1s3 0 4.4-.1c1.3-.1 2.3-.3 3.1-.6.8-.3 1.5-.8 2.2-1.5.7-.7 1.2-1.4 1.5-2.2.3-.8.5-1.8.6-3.1.1-1.3.1-1.6.1-4.4s0-3-.1-4.4c-.1-1.3-.3-2.3-.6-3.1-.3-.8-.8-1.5-1.5-2.2-.7-.7-1.4-1.2-2.2-1.5-.8-.3-1.8-.5-3.1-.6C15 0 14.7 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.3-11.8a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z"
            />
          </svg>
          <span> Instagram </span>
        </a>
        <a
          v-else-if="contact.name === 'linkedin'"
          class="btn-contact"
          :href="contact.link"
          target="_blank"
        >
          <svg
            class="icon"
            width="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.266 2.368 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM3.56 20.452h3.554V9H3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>

          <span> LinkedIn </span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section-contacts {
  /*margin: 20rem 0;*/
  height: 100vh;
}
.section-contacts > .contacts-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.contacts-list:hover {
  animation: bounce 1.2s ease;
}

.section-contacts > * {
  opacity: v-bind(animationProgress);
  transform: translateY(v-bind(animationTranslateParagraph));
  max-width: 40rem;
}
.section-contacts > h2 {
  transform: translateY(v-bind(animationTranslateTitle));
  margin: 2rem 0;
}

@media (max-width: 800px) {
  .section-contacts > * {
    transform: translateY(
      calc(v-bind(animationTranslateParagraph) * var(--animation-values-coef))
    );
  }
  .section-contacts > h2 {
    transform: translateY(
      calc(v-bind(animationTranslateTitle) * var(--animation-values-coef))
    );
  }
}

.icon {
  vertical-align: bottom;
  margin-bottom: 3px;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
