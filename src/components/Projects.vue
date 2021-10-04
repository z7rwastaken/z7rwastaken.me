<template>
  <section
    id="projects"
    class="page"
  >
    <h1><a href="#projects">Projects</a></h1>
    <div class="projectsContainer">
      <ProjectsItem
        description="Shady is a feature-rich Discord bot including a fun leveling system, an amazing economy system, tools to moderate your server along with a modern dashboard, and many others! All in set with ease of use."
        title="Shady"
        duration="04/2020 till Present"
        link="https://discord.gg/w6DCSnybHS"
      />
      <ProjectsItem
        description="This was my first try to make a proper site with a reasonable UI and using Vue.js."
        title="z7rwastaken.me"
        duration="10/2021 till Present"
      />
    </div>
  </section>
</template>

<script>
import ProjectsItem from "./ProjectsItem.vue";

export default {
  name: "Projects",
  components: {
    ProjectsItem,
  },
};
</script>

<style lang="scss" scoped>
.projectsContainer {
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>