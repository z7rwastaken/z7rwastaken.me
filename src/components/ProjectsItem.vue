<template>
  <div class="projectsItem">
    <div class="projectsItemContainer">
      <h3 class="projectsTitle">
        <a :href="link">{{ title }}</a>
      </h3>
      <p class="projectsDescription">
        {{ description }}
      </p>
      <span>{{ duration }}</span>
    </div>
  </div>
</template>

<script>
export default {
  title: "ProjectsItem",
  props: {
    title: {
      type: String,
      default: "Project Title"
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum."
    },
    duration: {
      type: String,
      default: "2021 till present"
    },
    link: {
      type: String,
      default: "https://z7rwastaken.me"
    }
  }
};
</script>

<style lang="scss" scoped>
.projectsItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  max-width: 612px;
  background-color: var(--backroundLighter);
  border-radius: 24px;

  .projectsTitle a {
    font-size: 1.5rem;
    transition: color 0.5s linear;

    &:hover {
      color: var(--secondary);
    }
  }

  .projectsDescription {
    font-size: 1rem;
    font-style: italic;
    color: gray;
  }
  
  span {
    font-size: 15px;
  }

  .projectsItemContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 30px
  }
}
</style>