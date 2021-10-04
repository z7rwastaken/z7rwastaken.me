<template>
  <div class="tooltip">
    <span class="text">{{ text }}</span>
    <span class="toolTipText">{{ toolTipText }}</span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      default: "I'm a word"
    },
    toolTipText: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum."
    },
    icon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  .text {
    display: inline-block;
    font-weight: 550;
    color: var(--brand);
    transition: all 0.3s linear;

    &:hover {
      color: var(--secondary);;
      padding: 0 5px 0 5px;
    }
  }

  .toolTipText {
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;

    visibility: hidden;
    width: 225px;
    background-color: hsla(0, 0%, 15%, 0.5);
    color: var(--secondary);;
    text-align: center;
    padding: 10px;
    border-radius: 12px;

    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .toolTipText {
    visibility: visible;
    opacity: 1;
  }
}
</style>