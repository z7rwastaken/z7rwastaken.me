<template>
  <div class="home">
    <!-- Scrollbar Menu -->
    <div class="menu">
      <span
        v-for="(offset, index) in offsets"
        :key="index"
        class="point"
        :class="{ active: activeSection === index }"
        @click="scrollToSection(index)"
      >
        <span 
          class="pageTitle" 
          :data-active="sectionIndexing[activeSection]"
        >
          {{ sectionIndexing[activeSection] }}
        </span>
      </span>
    </div>

    <div class="flex">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";

export default {
  name: "Home",
  components: {
    About,
    Contact,
    Projects,
    Skills
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionIndexing: ["About", "Skills", "Projects", "Contact"]
    };
  },
  methods: {
    calculateSection() {
      let sections = [...document.getElementsByTagName("section")];

      sections.forEach((section) => {
        this.offsets.push(section);
      });
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) this.moveUp();
      else if (e.wheelDelta > 30 && !this.inMove) this.moveDown();

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) this.moveUp();
      else if (e.detail < 0 && !this.inMove) this.moveDown();

      e.preventDefault();
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = 0;
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
  },
  mounted() {
    this.calculateSection();

    // Mozilla Firefox
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
    // Other browsers
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
  }
};
</script>

<style lang="scss">
.home {
  background: var(--background);
  overflow: hidden;
  color: var(--white);
  scroll-behavior: smooth;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 550px;
  }

  .page {
    animation: 2s ease-in-out 0s loadPage;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    background: var(--background);

    h1 {
      font-size: 3rem;
      color: var(--white);
      transition: all 0.5s ease-in-out;

      &:hover { 
        color: var(--indigo);
      }
    }

    h2 {
      color: var(--gray)
    }

    a {
      text-decoration: none;
    }

    p {
      width: var(--page-max-width);
      color: var(--gray);
      font-size: 24px;
      margin: 8px;

      b {
        color: var(--brand);
      }
    }

    @keyframes loadPage {
      0% {
        transform: scale(0.1);
        opacity: 20%;
      }

      100% {
        transform: scale(1);
        opacity: 100%;
      }
    }
  }

  .menu {
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    .point {
      width: 10px;
      height: 10px;
      background: var(--white);
      display: block;
      border-radius: 8px;
      margin: 1rem 0;
      opacity: 0.6;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      .pageTitle {
        display: none;
      }

      &.active {
        opacity: 1;
        transform: scale(1.5);

        .pageTitle {
          margin-top: -3px;
          position: fixed;
          float: left;
          display: inline;
          width: fit-content;

          font-size: 12px;

          // TODO: Bruh for God's sake imma need to change this
          &[data-active="About"] {
            margin-left: -40px;
          }

          &[data-active="Skills"] {
            margin-left: -40px;
          }

          &[data-active="Projects"] {
            margin-left: -55px;
          }

          &[data-active="Contact"] {
            margin-left: -55px;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .home {
    height: 100%;
    padding: 0 5rem;
  }
}

@media (max-width: 1023px) {
  .home {
    padding: 4px 12px;

    .skillsContainer {
      flex-direction: column;
      align-items: center;
    }
  }

  .menu {
    display: none;
  }
}
</style>