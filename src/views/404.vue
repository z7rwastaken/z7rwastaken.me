<template>
  <div class="page">
    <h1 class="title">
      404
    </h1>
    <p class="description">
      The page you requested does not exist or has been moved!
    </p>
    <router-link to="/">
      Return to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  .title {
    font-size: 5rem;
    font-weight: bold;
    color: var(--secondary);
  }

  .description {
    text-align: center;
    font-size: 1.25rem;
    font-size: var(--gray);
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-size: 1rem;
    border: 3px solid var(--brand);
    border-radius: 8px;
    padding: 8px 12px;
    margin: 16px 0;
    text-align: center;
    transition: all 0.3s linear;
    max-width: 125px;
    width: 100%;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>