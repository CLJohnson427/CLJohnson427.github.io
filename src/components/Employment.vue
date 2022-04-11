<template>
  <section id="erc-section" class="card-container">
    <div class="card-image">
      <a :href="employerWebsite" target="_blank">
        <img :src="logoImagePath" :alt="employerName" class="responsive-image">
      </a>
    </div>
    <div class="card-item card-header">
      <h3 class="card-title">
        <!-- <slot name="employerName"></slot> -->
        {{ employerName }}
      </h3>
      <hr>
      <div class="sub-header">
        <div class="bold">
          <slot name="jobTitle"></slot>
        </div>
        <div class="bold">
          <slot name="employmentLocation"></slot>
        </div>
        <div class="bold">
          <slot name="employmentDates"></slot>
        </div>
      </div>
    </div>
    <div class="card-item card-main">
      <slot name="employmentDescription"></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  employerName: String,
  employerWebsite: String,
  logoImagePath: String
})

</script>

<style scoped>

</style>