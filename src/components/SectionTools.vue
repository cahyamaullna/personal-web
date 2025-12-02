<script setup lang="ts">
interface TechItem {
  name: string
  icon: string
}

const techs: TechItem[] = [
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Vue', icon: 'devicon-vuejs-plain colored' },
  { name: 'Nuxt', icon: 'devicon-nuxtjs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Oracle', icon: 'devicon-oracle-original colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Redis', icon: 'devicon-redis-plain colored' },
  { name: 'Kafka', icon: 'devicon-apachekafka-original colored' },
  { name: 'Quarkus', icon: 'devicon-quarkus-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwind-plain colored' },
]
</script>

<template>
  <div class="tech-wrapper">
    <div class="tech-slider">
      <div
        v-for="t in techs"
        :key="t.name"
        class="tech-item"
        :title="t.name"
      >
        <i
          class="tech-icon"
          :class="[t.icon]"
        />
        <!-- <span>{{ t.name }}</span> -->
      </div>

      <!-- clone biar slider infinite -->
      <div
        v-for="t in techs"
        :key="`${t.name}-clone`"
        class="tech-item"
        :title="t.name"
      >
        <i
          class="tech-icon"
          :class="[t.icon]"
        />
        <!-- <span>{{ t.name }}</span> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-wrapper {
  width: 90%;
  overflow: hidden;
  padding: 1rem 0;
  background: #ffffffc9;
  border-radius: 1rem;
  /* box-shadow: 0 8px 24px rgba(0,0,0,0.06); */
  position: relative;
}

/* slider horizontal */
.tech-slider {
  display: flex;
  gap: 1.8rem;
  animation: slide 28s linear infinite;
  padding: 1rem 0;
}

/* card item */
.tech-item {
  background: white;
  border-radius: 1rem;
  /* box-shadow: 0 4px 12px rgba(0,0,0,0.06); */
  padding: 1rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 0.4rem;
  transition: transform 0.25s ease;
}

.tech-item:hover .tech-icon {
  transform: scale(1.15);
}

span {
  font-size: 0.75rem;
  margin-top: 0.3rem;
}
@media (max-width: 600px) {
  .tech-wrapper {
    margin-left: 1.5rem;

  }
  .tech-slider {
    justify-content: center;
  }

  .tech-item {
    width: 5rem;
    padding: 0.8rem;
  }

  .tech-icon {
    font-size: 2.5rem;
  }
}

/* infinite slider keyframes */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
