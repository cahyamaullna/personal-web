<script setup lang="ts">
import Background from '@/components/BackgroundScene.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionExperience from '@/components/SectionExperience.vue'
import SectionContacts from '@/components/SectionContacts.vue'
import SectionTools from '@/components/SectionTools.vue'

const sections = [
  { id: 'title', text: 'Hi' },
  { id: 'about', text: 'About' },
  { id: 'experience', text: 'Experience' },
  { id: 'contacts', text: 'Contacts' },
]

const scrollToSection = (id: string) => {
  const targetElement = document.getElementById(id)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main>
    <SectionTitle
      id="title"
      class="snap-center"
    />
    <SectionAbout
      id="about"
      class="snap-center"
    />
    <SectionTools class="snap-center" />
    <SectionExperience id="experience" />
    <SectionContacts
      id="contacts"
      class="snap-center"
    />
    <div class="sider">
      <ul class="sider-list">
        <li
          v-for="section in sections"
          :key="section.id"
          class="sider-item"
          @click="scrollToSection(section.id)"
        >
          {{ section.text }}
        </li>
      </ul>
    </div>
  </main>
  
  <Background />
</template>

<style scoped>
@layer layout {
  main > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: margin 0.6s cubic-bezier(0, 1, 0.18, 1),
      gap 0.6s cubic-bezier(0, 1, 0.18, 1);
  }
  main > section > * {
    transform-origin: 50% 50%;
  }
  
  .snap-center {
    scroll-snap-align: center;
  }

}
.sider-list {
  list-style: none;
  padding: 0;
}

.sider {
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 5px;
}

.messageBtn {
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  margin: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center; 
}

.messageBtn:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease;
  background: #000;
  color: #fff;
}

.messageBtn > p {
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
}

.danmus {
  position: fixed;
  top: 0;
  width: 100%;
  height: 30%;
  z-index: -1;
  background: transparent;
}

.sider-item {
  display: block; /* Make li a block element */
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  border: none;
  font-weight: bolder;
  border-radius: 5px;
}


.sider-item:hover {
  background: #e1f7ff;
  transform: translateX(-15px);
  transition: transform 1 ease;
}

.message {
  position: fixed;
  bottom: 2rem;
  right: 10%;
}

/* 🔥 Jika layar <= 768px (tablet + mobile), pindahkan sider ke atas */
@media (max-width: 768px) {
  .sider {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: rgba(255, 255, 255, 0.517);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    z-index: 9999;
    /* border-bottom: 1px solid #e5e5e5; */
  }

  .sider-list {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .sider-item {
    margin: 0;
    padding: 8px 12px;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  .sider-item:hover {
    transform: translateY(-4px); /* efek naik sedikit */
  }

  #contacts,
  #experience {
    padding: 3rem 2rem;
  }
}
</style>
