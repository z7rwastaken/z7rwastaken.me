<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

:root {
  --background: #0b0b0f;
  --backroundLighter: #21212c;
  --indigo: #9BA0BC;
  --aqua: #A9DDD6;
  --gray: #c5ccd1;
  --brand: #ff2756;
  --secondary: #9b0537;
  --gradient: linear-gradient(90deg, #f13b59, rgb(182, 21, 133));
  --white: #f7f3f3;
  --red: #ff3d3d;
  --max-page-width: 1024px;
}

a {
  color:unset;
}

html,
body {
  height: 100%;
  background: var(--background);
}

#app {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  scrollbar-width: none;
  height: 100%;
  max-height: 100%;
}

.flex {
  display: flex;
}

.cd-el {
  cursor: not-allowed;

  &:active {
    pointer-events: none;
  }
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: 725px) {
  ::-webkit-scrollbar {
    width: 5px;
  }
}

* {
  padding: 0;
  margin: 0;
  outline: none;

  img {
    vertical-align: middle;
  }
}
</style>