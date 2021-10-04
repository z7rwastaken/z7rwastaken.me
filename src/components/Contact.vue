<template>
  <section
    id="contact"
    class="page"
  >
    <h1><a href="#contact">Contact me</a></h1>
    <ul class="mediaList">
      <li>
        <a href="https://github.com/z7rwastaken">
          <font-awesome-icon
            :icon="['fab', 'github-alt']"
            class="mediaIcon"
            id="figma"
          />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC6BBnnPyHdJujAuVfi1V_1A">
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            class="mediaIcon"
            id="figma"
          />  
        </a>
      </li>
      <li>
        <a href="https://twitter.com/z7rwastaken">
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="mediaIcon"
            id="figma"
          />
        </a>
      </li>
      <li>
        <a href="https://discord.com/channels/@me/485084633000706062">
          <font-awesome-icon
            :icon="['fab', 'discord']"
            class="mediaIcon"
            id="figma"
          />
        </a>
      </li>
      <li>
        <a href="mailto:andreww@shadowct.eu">
          <font-awesome-icon
            :icon="['fas', 'mail-bulk']"
            class="mediaIcon"
            id="figma"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    name: "Projects"
}
</script>

<style lang="scss" scoped>
.mediaList {
  padding: 10px 0px;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 30px;

   .mediaIcon {
    height: 64px;
    width: 64px;

    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.2);
      color: var(--secondary);
      padding: 0 10px 0 10px;
    }
  }
}

@media (max-width: 1023px) { 
  .mediaList {
    padding: 10px 0px;

    .mediaIcon {
      height: 32px;
      width: 32px;
    }
  }
}
</style>