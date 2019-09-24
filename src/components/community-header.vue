<template>
  <div class="black-header">
    <h3>JOIN OUR COMMUNITY</h3>
    <p>
      The biggest community of African photographers
    </p>
    <router-link class="" to="/community/join">
      <button class="btn btn-p btn-rounded btn-peexoo">Join Us</button>
    </router-link>
  </div>
</template>

<style scoped>
.black-header {
  height: 380px !important;
  /* background-image: url('../assets/images/hero.png') !important; */
}

.black-header p {
  padding: 10px 350px 0 350px;
  font-weight: normal !important;
}
.btn.btn-peexoo {
  padding: 0 36px !important;
}
p {
  margin-bottom: 3px !important;
}
@media (max-width: 480px) {
  .black-header {
    height: 310px !important;
    padding-top: 44px !important;
    /* background-image: url('../assets/images/hero.png') !important; */
  }
  .black-header p {
    padding: 10px;
  }
}
</style>
