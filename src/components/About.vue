<template>
  <section
    id="about"
    class="page"
  >
    <h1><a href="#about">Andreas K.</a></h1>
    <h2 class="nameSubtitle">
      (z7rwastaken)
    </h2>
    <p>
      I'm Andrew, a 
      <Tooltip
        text="self-taught"
        tool-tip-text="At one point in early 2020 I was very interested in making a web application so I started learning JavaScript as my first ever language."
      /> Web Developer
      settled in 
      <Tooltip
        text="Greece"
        tool-tip-text="Epirus, Northen Greece."
      /> as well a Highshool student. My interest in computers beggins
      <Tooltip
        text="in a younger age"
        tool-tip-text="Was involved in classes such as utilizing Microsoft Office programms & begginer Lego Robotics."
      />, but it has been emphasized the recent 2 years.
      During those 
      <Tooltip
        text="2 years"
        tool-tip-text="Quarantine made me want to create something different, harder and quality-wise stricter. So along with my friend Lambros we started to implement international standards on our new projects and try new things. "
      /> 
      I've learnt the importance of being elaborative in a team project and practiced Programming, Database & System Administration skills.
    </p>
  </section>
</template>

<script>
import Tooltip from './Tooltip.vue'

export default {
  components: { 
    Tooltip 
    },
    name: "About"
}
</script>