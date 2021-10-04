<template>
  <section
    id="skills"
    class="page"
  >
    <h1><a href="#skills">Skills</a></h1>
    <h2 class="warn">
      (I'm not in any way affiliated with the following organizations.)
    </h2>
    <div class="skillsSection">
      <h2 class="subTitle">
        Languages
      </h2>
      <div class="skillsContainer">
        <font-awesome-icon
          :icon="['fab', 'js']"
          class="skillIcon"
          id="javascript"
        />
        <font-awesome-icon
          :icon="['fab', 'node']"
          class="skillIcon"
          id="node"
        />
        <font-awesome-icon
          :icon="['fab', 'python']"
          class="skillIcon"
          id="python"
        />
        <font-awesome-icon
          :icon="['fab', 'java']"
          class="skillIcon"
          id="java"
        />
        <i
          class="devicon-kotlin-plain"
          data-skillIcon="true"
          id="kotlin"
        />
        <font-awesome-icon
          :icon="['fab', 'html5']"
          class="skillIcon"
          id="html"
        />
        <font-awesome-icon
          :icon="['fab', 'css3-alt']"
          class="skillIcon"
          id="css"
        />
      </div>
    </div>
    <div class="skillsSection">
      <h2 class="subTitle">
        Databases
      </h2>
      <div class="skillsContainer">
        <i
          class="devicon-mysql-plain"
          data-skillIcon="true"
          id="mysql"
        />
      </div>
    </div>
    <div class="skillsSection">
      <h2 class="subTitle">
        Frameworks & Libraries
      </h2>
      <div class="skillsContainer">
        <font-awesome-icon
          :icon="['fab', 'vuejs']"
          class="skillIcon"
          id="vue"
        />
        <i
          class="devicon-electron-original"
          data-skillIcon="true"
          id="electron"
        />
        <font-awesome-icon
          :icon="['fab', 'bootstrap']"
          class="skillIcon"
          id="bootstrap"
        />
      </div>
    </div>
    <div class="skillsSection">
      <h2 class="subTitle">
        Designing / Video Editing
      </h2>
      <div class="skillsContainer">
        <font-awesome-icon
          :icon="['fab', 'figma']"
          class="skillIcon"
          id="figma"
        />
        <i
          class="devicon-premierepro-plain"
          data-skillIcon="true"
          id="premiere"
        />
        <i
          class="devicon-photoshop-plain"
          data-skillIcon="true"
          id="photoshop"
        />
      </div>
    </div>
    <div class="skillsSection">
      <h2 class="subTitle">
        Others
      </h2>
      <div class="skillsContainer">
        <font-awesome-icon
          :icon="['fab', 'git-alt']"
          class="skillIcon"
          id="git"
        />
        <font-awesome-icon
          :icon="['fab', 'linux']"
          class="skillIcon"
          id="linux"
        />
        <font-awesome-icon
          icon="terminal"
          class="skillIcon"
          id="bash"
        />
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="skillIcon"
          id="github"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
.skillsSection {
  margin-top: 2vw;

  .subTitle {
    transition: all 0.2s linear;

    &:hover {
      color: rgb(160, 160, 160);
      padding-bottom: 15px;
      transform: scale(1.2);
    }
  }

  .subTitle:hover ~ .skillsContainer .skillIcon, .subTitle:hover ~ .skillsContainer i[data-skillIcon="true"] {
    transform: scale(0.8);
  }
}

.skillsContainer {
  display: flex;
  gap: 30px;
  justify-content: center;

  .skillIcon, i[data-skillIcon="true"] {
    height: 64px;
    width: 64px;

    // * Devicon size
    font-size: 64px;

    transition: all 0.2s linear;
  }

  #javascript:hover {
    color: #f0db4f;
  }

  #node:hover {
    color: greenyellow;
  }

  #python:hover {
    color: #4b8bbe;
  }

  #java:hover {
    color: #5382a1;
  }

  #kotlin:hover {
    color: #B75EA4;
  }

  #mysql:hover {
    color: #00758f;
  }

  #electron:hover {
    color: gray;
  }

  #figma:hover {
    color: #FF7262;
  }

  #premiere:hover {
    color: #330D3E;
  }

  #photoshop:hover {
    color: #40D0FB;
  }

  #github:hover {
    color: #333;
  }

  #git:hover {
    color: #f34f29;
  }

  #linux:hover {
    color: #FFA400;
  }

  #bash:hover {
    color: gray;
  }

  #html:hover {
    color: #e34f26;
  }

  #css:hover {
    color: #002561;
  }

  #vue:hover {
    color: #42b883;
  }

  #bootstrap:hover {
    color: #8f13fe;
  }
}

@media (max-width: 1023px) {
  .skillsSection {
    padding: 10px 0px;
    background-color: var(--backgroundLighter);
  }
  .skillsContainer {
    gap: 10px;

    .skillIcon, i[data-skillIcon="true"] {
      transform: scale(0.8);
    }
  }
}
</style>